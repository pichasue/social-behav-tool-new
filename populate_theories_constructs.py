import json
import psycopg2

# Function to create SQL insert statements for theories and constructs
def create_insert_statements(theories_data):
    insert_statements = []
    for theory in theories_data:
        # Insert statement for the theory
        theory_insert = f"INSERT INTO new_theories (name, description) VALUES ('{theory['name']}', '{theory['description']}');"
        insert_statements.append(theory_insert)

        # Assuming the theory ID will be set by a sequence, we retrieve it for use in constructs
        theory_id_select = f"(SELECT id FROM new_theories WHERE name = '{theory['name']}')"

        # Insert statements for the constructs
        for construct in theory['constructs']:
            construct_insert = f"INSERT INTO constructs (theory_id, name, description) VALUES ({theory_id_select}, '{construct['name']}', '{construct['description']}');"
            insert_statements.append(construct_insert)

    return insert_statements

# Function to connect to the PostgreSQL database and execute the insert statements
def populate_database(insert_statements, db_credentials):
    try:
        # Connect to the PostgreSQL database
        conn = psycopg2.connect(
            dbname=db_credentials['dbname'],
            user=db_credentials['user'],
            password=db_credentials['password'],
            host=db_credentials['host'],
            port=db_credentials['port']
        )
        cur = conn.cursor()

        # Execute each insert statement
        for statement in insert_statements:
            cur.execute(statement)

        # Commit the changes
        conn.commit()

        # Close the cursor and connection
        cur.close()
        conn.close()

        print("Theories and constructs have been successfully added to the database.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Main execution
if __name__ == "__main__":
    # Load theories and constructs data from a JSON file
    with open('theories_and_constructs.json', 'r') as file:
        theories_data = json.load(file)

    # Generate the insert statements
    insert_statements = create_insert_statements(theories_data)

    # Database credentials (placeholder values to be replaced with actual credentials)
    db_credentials = {
        'dbname': 'sbc_tool_database',
        'user': 'postgres',
        'password': 'password',
        'host': 'database-1-instance-1-us-east-1c.cx8gcs2ysurg.us-east-1.rds.amazonaws.com',
        'port': '5432'
    }

    # Populate the database
    populate_database(insert_statements, db_credentials)
