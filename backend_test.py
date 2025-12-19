#!/usr/bin/env python3
"""
Backend API Testing for Katlego Seiphemo's Portfolio Contact Form
Tests the contact form endpoints for proper functionality and validation.
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Backend URL from frontend/.env
BACKEND_URL = "https://modern-noir-2.preview.emergentagent.com/api"

def test_contact_form_api():
    """Test all contact form API endpoints"""
    print("=" * 60)
    print("TESTING CONTACT FORM API ENDPOINTS")
    print("=" * 60)
    print(f"Backend URL: {BACKEND_URL}")
    print()
    
    results = {
        "total_tests": 0,
        "passed": 0,
        "failed": 0,
        "errors": []
    }
    
    # Test 1: POST /api/contact - Valid submission
    print("TEST 1: POST /api/contact - Valid contact submission")
    print("-" * 50)
    
    valid_contact_data = {
        "name": "Katlego Seiphemo",
        "email": "katlego@example.com", 
        "message": "This is a test message from the portfolio contact form. I am interested in discussing potential collaboration opportunities."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=valid_contact_data, timeout=10)
        results["total_tests"] += 1
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 201:
            data = response.json()
            required_fields = ["id", "name", "email", "message", "created_at", "status"]
            
            if all(field in data for field in required_fields):
                print("✅ PASSED: Valid contact submission successful")
                print(f"   Contact ID: {data.get('id')}")
                print(f"   Status: {data.get('status')}")
                results["passed"] += 1
            else:
                missing_fields = [f for f in required_fields if f not in data]
                error_msg = f"Missing required fields in response: {missing_fields}"
                print(f"❌ FAILED: {error_msg}")
                results["failed"] += 1
                results["errors"].append(f"POST /api/contact: {error_msg}")
        else:
            error_msg = f"Expected status 201, got {response.status_code}"
            print(f"❌ FAILED: {error_msg}")
            results["failed"] += 1
            results["errors"].append(f"POST /api/contact: {error_msg}")
            
    except Exception as e:
        error_msg = f"Request failed: {str(e)}"
        print(f"❌ ERROR: {error_msg}")
        results["failed"] += 1
        results["errors"].append(f"POST /api/contact: {error_msg}")
    
    print()
    
    # Test 2: GET /api/contacts - Retrieve all contacts
    print("TEST 2: GET /api/contacts - Retrieve all contact submissions")
    print("-" * 50)
    
    try:
        response = requests.get(f"{BACKEND_URL}/contacts", timeout=10)
        results["total_tests"] += 1
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Number of contacts retrieved: {len(data)}")
            
            if isinstance(data, list):
                print("✅ PASSED: Successfully retrieved contacts list")
                results["passed"] += 1
                
                # Check if our test contact is in the list
                if data:
                    sample_contact = data[0]
                    print(f"   Sample contact fields: {list(sample_contact.keys())}")
            else:
                error_msg = "Response is not a list"
                print(f"❌ FAILED: {error_msg}")
                results["failed"] += 1
                results["errors"].append(f"GET /api/contacts: {error_msg}")
        else:
            error_msg = f"Expected status 200, got {response.status_code}"
            print(f"❌ FAILED: {error_msg}")
            results["failed"] += 1
            results["errors"].append(f"GET /api/contacts: {error_msg}")
            
    except Exception as e:
        error_msg = f"Request failed: {str(e)}"
        print(f"❌ ERROR: {error_msg}")
        results["failed"] += 1
        results["errors"].append(f"GET /api/contacts: {error_msg}")
    
    print()
    
    # Test 3: Validation - Empty name
    print("TEST 3: POST /api/contact - Validation test (empty name)")
    print("-" * 50)
    
    invalid_data_empty_name = {
        "name": "",
        "email": "test@example.com",
        "message": "This should fail due to empty name"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=invalid_data_empty_name, timeout=10)
        results["total_tests"] += 1
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:  # FastAPI returns 422 for validation errors
            print("✅ PASSED: Empty name validation working correctly")
            results["passed"] += 1
        else:
            error_msg = f"Expected status 400/422 for empty name, got {response.status_code}"
            print(f"❌ FAILED: {error_msg}")
            results["failed"] += 1
            results["errors"].append(f"POST /api/contact (empty name): {error_msg}")
            
    except Exception as e:
        error_msg = f"Request failed: {str(e)}"
        print(f"❌ ERROR: {error_msg}")
        results["failed"] += 1
        results["errors"].append(f"POST /api/contact (empty name): {error_msg}")
    
    print()
    
    # Test 4: Validation - Invalid email
    print("TEST 4: POST /api/contact - Validation test (invalid email)")
    print("-" * 50)
    
    invalid_data_bad_email = {
        "name": "Test User",
        "email": "invalid-email-format",
        "message": "This should fail due to invalid email"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=invalid_data_bad_email, timeout=10)
        results["total_tests"] += 1
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:
            print("✅ PASSED: Invalid email validation working correctly")
            results["passed"] += 1
        else:
            error_msg = f"Expected status 400/422 for invalid email, got {response.status_code}"
            print(f"❌ FAILED: {error_msg}")
            results["failed"] += 1
            results["errors"].append(f"POST /api/contact (invalid email): {error_msg}")
            
    except Exception as e:
        error_msg = f"Request failed: {str(e)}"
        print(f"❌ ERROR: {error_msg}")
        results["failed"] += 1
        results["errors"].append(f"POST /api/contact (invalid email): {error_msg}")
    
    print()
    
    # Test 5: Validation - Empty message
    print("TEST 5: POST /api/contact - Validation test (empty message)")
    print("-" * 50)
    
    invalid_data_empty_message = {
        "name": "Test User",
        "email": "test@example.com",
        "message": ""
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=invalid_data_empty_message, timeout=10)
        results["total_tests"] += 1
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:
            print("✅ PASSED: Empty message validation working correctly")
            results["passed"] += 1
        else:
            error_msg = f"Expected status 400/422 for empty message, got {response.status_code}"
            print(f"❌ FAILED: {error_msg}")
            results["failed"] += 1
            results["errors"].append(f"POST /api/contact (empty message): {error_msg}")
            
    except Exception as e:
        error_msg = f"Request failed: {str(e)}"
        print(f"❌ ERROR: {error_msg}")
        results["failed"] += 1
        results["errors"].append(f"POST /api/contact (empty message): {error_msg}")
    
    print()
    
    # Test Summary
    print("=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    print(f"Total Tests: {results['total_tests']}")
    print(f"Passed: {results['passed']}")
    print(f"Failed: {results['failed']}")
    print(f"Success Rate: {(results['passed']/results['total_tests']*100):.1f}%" if results['total_tests'] > 0 else "0%")
    
    if results['errors']:
        print("\nERRORS ENCOUNTERED:")
        for error in results['errors']:
            print(f"  - {error}")
    
    print()
    return results

if __name__ == "__main__":
    test_results = test_contact_form_api()
    
    # Exit with error code if any tests failed
    if test_results['failed'] > 0:
        sys.exit(1)
    else:
        print("🎉 All tests passed!")
        sys.exit(0)