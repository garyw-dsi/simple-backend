# Use the official Python image as a base
FROM python:3.9

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the requirements file and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire project into the container
COPY . .

# Expose the port for the backend
EXPOSE 5000

# Command to run the backend app
CMD ["python", "app.py"]
