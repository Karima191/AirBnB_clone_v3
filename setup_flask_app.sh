#!/bin/bash

# Define the source and destination directories
source_dir="web_flask"
dest_dir="web_dynamic"

# Create the destination directory if it doesn't exist
mkdir -p "$dest_dir"

# Copy the static directory
cp -r "$source_dir/static" "$dest_dir/"

# Copy the template file and rename it
cp "$source_dir/templates/100-hbnb.html" "$dest_dir/templates/0-hbnb.html"

# Copy the __init__.py file
cp "$source_dir/__init__.py" "$dest_dir/"

# Copy the 100-hbnb.py file and rename it
cp "$source_dir/100-hbnb.py" "$dest_dir/0-hbnb.py"

# Update the route in 0-hbnb.py
sed -i 's+@app.route("/100-hbnb/")+@app.route("/0-hbnb/")+' "$dest_dir/0-hbnb.py"

echo "Files have been copied and updated successfully."
