#!/bin/bash
# Human Labs POC - API Contracts (cURL Examples)
# Base URL: http://localhost:3000

BASE_URL="http://localhost:3000"

echo "========================================"
echo "Human Labs POC - API Contracts"
echo "========================================"
echo ""

# 1. Health Check
echo "1. Health Check"
echo "GET /"
curl -X GET "${BASE_URL}/" \
  -H "Content-Type: application/json"
echo -e "\n\n"

# 2. Get Task by ID
echo "2. Get Task by ID"
echo "GET /task/:id"
echo "Requires: x-platform-user-id header"
curl -X GET "${BASE_URL}/task/1" \
  -H "Content-Type: application/json" \
  -H "x-platform-user-id: 1"
echo -e "\n\n"

# 3. Assign Task to User
echo "3. Assign Task to User"
echo "POST /task/assign"
curl -X POST "${BASE_URL}/task/assign" \
  -H "Content-Type: application/json" \
  -d '{
    "taskId": 1,
    "platformUserId": 1
  }'
echo -e "\n\n"

# 4. Add Annotation to Task
echo "4. Add Annotation to Task"
echo "POST /annotations"
echo "Requires: x-platform-user-id header"
curl -X POST "${BASE_URL}/annotations" \
  -H "Content-Type: application/json" \
  -H "x-platform-user-id: 1" \
  -d '{
    "taskId": 1,
    "annotations": [
      {
        "value": {
          "start": 0,
          "end": 10,
          "text": "Sample text",
          "labels": ["LABEL1"]
        },
        "from_name": "label",
        "to_name": "text",
        "type": "labels"
      }
    ]
  }'
echo -e "\n\n"

# 5. Approve Task
echo "5. Approve Task"
echo "POST /task/approve"
echo "Requires: x-platform-user-id header"
curl -X POST "${BASE_URL}/task/approve" \
  -H "Content-Type: application/json" \
  -H "x-platform-user-id: 1" \
  -d '{
    "taskId": 1
  }'
echo -e "\n\n"

# 6. Reject Task
echo "6. Reject Task"
echo "POST /task/reject"
echo "Requires: x-platform-user-id header"
curl -X POST "${BASE_URL}/task/reject" \
  -H "Content-Type: application/json" \
  -H "x-platform-user-id: 1" \
  -d '{
    "taskId": 1,
    "annotationId": 1,
    "reason": "Incorrect labeling"
  }'
echo -e "\n\n"

echo "========================================"
echo "End of API Contracts"
echo "========================================"
