import tensorflow as tf
import tensorflow_hub as hub
import tensorflowjs as tfjs
import os
import subprocess

# Target directory to save the TensorFlow.js model
tfjs_target_dir = '/home/ubuntu/social-behav-tool-new/model/web_model'

# Ensure the target directory exists
os.makedirs(tfjs_target_dir, exist_ok=True)

# TensorFlow Hub model URL
model_url = "https://tfhub.dev/tensorflow/bert_en_uncased_L-12_H-768_A-12/2"

# Define the sequence length for the BERT model's requirements
sequence_length = 128  # The length of the input sequence

# Create KerasTensors using tf.keras.Input for each input type required by the BERT layer
input_word_ids = tf.keras.Input(shape=(sequence_length,), dtype=tf.int32, name='input_word_ids')
input_mask = tf.keras.Input(shape=(sequence_length,), dtype=tf.int32, name='input_mask')
input_type_ids = tf.keras.Input(shape=(sequence_length,), dtype=tf.int32, name='input_type_ids')

# Custom Keras layer that wraps the BERT layer
class BertLayer(tf.keras.layers.Layer):
    def __init__(self, model_url, **kwargs):
        super(BertLayer, self).__init__(**kwargs)
        self.bert_layer = hub.KerasLayer(model_url, trainable=False)

    def build(self, input_shape):
        # Build the bert_layer with the correct input shapes
        self.bert_layer.build(input_shape)

    def call(self, inputs):
        # Ensure inputs are a dictionary with the expected keys for the BERT layer
        if not isinstance(inputs, dict):
            raise ValueError('inputs must be a dictionary with keys `input_word_ids`, `input_mask`, and `input_type_ids`.')
        # Unpack the dictionary into individual tensors
        input_word_ids = inputs['input_word_ids']
        input_mask = inputs['input_mask']
        input_type_ids = inputs['input_type_ids']
        # Pass the tensors as positional arguments in the order expected by the BERT layer
        return self.bert_layer([input_word_ids, input_mask, input_type_ids])

    def compute_output_shape(self, input_shape):
        # Hardcoded output shapes based on the BERT model's architecture
        # 'pooled_output' is the output of the [CLS] token, with shape [batch_size, hidden_size]
        pooled_output_shape = (input_shape['input_word_ids'][0], 768)
        # 'sequence_output' is the output for each token in the input sequence, with shape [batch_size, sequence_length, hidden_size]
        sequence_output_shape = (input_shape['input_word_ids'][0], sequence_length, 768)
        return {'pooled_output': pooled_output_shape, 'sequence_output': sequence_output_shape}

# Instantiate the custom BERT layer
bert_layer = BertLayer(model_url)

# The inputs to the BERT layer are now passed as a dictionary
bert_inputs = {
    "input_word_ids": input_word_ids,
    "input_mask": input_mask,
    "input_type_ids": input_type_ids
}

# Build the BertLayer to initialize weights and define output shape
bert_layer.build({
    "input_word_ids": input_word_ids.shape,
    "input_mask": input_mask.shape,
    "input_type_ids": input_type_ids.shape
})

# Call the custom BERT layer and get the pooled and sequence outputs
bert_outputs = bert_layer(bert_inputs)

# Access the outputs using the correct keys
sequence_output = bert_outputs['sequence_output']
pooled_output = bert_outputs['pooled_output']

# Construct the final model using the input layers created by tf.keras.Input
model = tf.keras.Model(
    inputs=bert_inputs,
    outputs=[sequence_output, pooled_output]
)

# Save the model in TensorFlow SavedModel format
saved_model_path = '/home/ubuntu/social-behav-tool-new/model/saved_model'
tf.saved_model.save(model, saved_model_path)
print("Model saved in TensorFlow SavedModel format at:", saved_model_path)

# Convert the TensorFlow SavedModel to TensorFlow.js format
# Using the tensorflowjs_converter command-line utility with the correct flags
try:
    # The signature_name is set to 'serving_default' to match the expected signature for TensorFlow.js
    conversion_command = [
        "tensorflowjs_converter",
        "--input_format=tf_saved_model",
        "--signature_name=serving_default",
        "--saved_model_tags=serve",
        saved_model_path,
        tfjs_target_dir
    ]
    print("Running TensorFlow.js conversion command:", conversion_command)
    # Run the conversion command and capture the output
    conversion_result = subprocess.run(conversion_command, capture_output=True, text=True)
    if conversion_result.returncode != 0:
        raise Exception(f"Conversion failed with exit code {conversion_result.returncode}\n"
                        f"STDOUT: {conversion_result.stdout}\n"
                        f"STDERR: {conversion_result.stderr}")
    print(f'Model has been converted and saved at {tfjs_target_dir}')
except Exception as e:
    print(f'An error occurred during model conversion: {e}')
