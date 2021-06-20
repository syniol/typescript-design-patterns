# Proxy Design Pattern
Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.


## Overview
Auth -> process
Cached Auth -> process


## Background



## Objectives
Minimise the calls to external API for reducing costs and better user experience. 


## Acceptance Criteria
Given Payment Processing service instantiated
When I make a payment for the first time
I should see one call for authentication from API

Given Payment Processing service instantiated with at least one payment
When I make a payment for the second time
I should not see a call for authentication from API


Auth -> process
Cached Auth -> process
