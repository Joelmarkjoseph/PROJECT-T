FROM public.ecr.aws/lambda/python:3.11

# Install gcc-c++ and Java
RUN yum install -y gcc-c++ java-1.8.0-openjdk-devel

# Copy application dependencies and code
COPY requirements.txt ${LAMBDA_TASK_ROOT}
COPY lambda_function.py ${LAMBDA_TASK_ROOT}

# Install Python dependencies
RUN pip install -r requirements.txt

# Command to run the Lambda function
CMD ["lambda_function.handler"]
