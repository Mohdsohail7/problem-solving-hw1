# problem-solving-hw1

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/Mohdsohail7/problem-solving-hw1)


Task 1: Trim Extra Whitespace

Tech Lead's Request: 'One issue we’ve been seeing is that users sometimes include extra spaces before or after their input, especially in form fields like usernames or addresses. We need a function to automatically trim that whitespace when we save the data to the database.'

Tech Details:

Create a utility trimWhitespace(str) that removes any leading or trailing spaces from a string.

This function will be applied to user inputs like usernames and addresses to ensure we store clean, consistent data.

function trimWhitespace(str) { /* ... */ }



// Example test cases
console.log(trimWhitespace('   Hello World   ')); // 'Hello World'
console.log(trimWhitespace('\\t  Trim Me  \\n')); // 'Trim Me'
console.log(trimWhitespace('NoSpaces')); // 'NoSpaces'
console.log(trimWhitespace('      ')); // ''
console.log(trimWhitespace(12345)); // 'Given test is not a string'
console.log(trimWhitespace(null)); // 'Given test is not a string'
console.log(trimWhitespace(undefined)); // 'Given test is not a string'


Task 2: Password Strength Check

Tech Lead's Request: 'We’re rolling out password strength validation to enhance security. We need to ensure that users are setting strong passwords that include a mix of characters. This is crucial for preventing brute force attacks.'

Tech Details:

Implement isValidPassword(password) to check if the password:

Is at least 8 characters long.

Contains at least one uppercase letter, one lowercase letter, and one number.

This function will be part of our signup and password change processes to improve security.

function isValidPassword(password) { /* ... */ }


// Example test cases
console.log(isValidPassword('Password123')); // true
console.log(isValidPassword('password123')); // false (no uppercase)
console.log(isValidPassword('PASSWORD123')); // false (no lowercase)
console.log(isValidPassword('Password')); // false (no number)
console.log(isValidPassword('P@ssw0rd!')); // true
console.log(isValidPassword('Short1')); // false (too short)
console.log(isValidPassword('12345678')); // false (only numbers)
console.log(isValidPassword('abcdefgh')); // false (only lowercase)
console.log(isValidPassword('')); // false (empty string)
console.log(isValidPassword(null)); // false (null)
console.log(isValidPassword(undefined)); // false (undefined)


Task 3: Remove Special Characters

Tech Lead's Request: 'We have a requirement to sanitize user inputs that might contain special characters, especially for usernames. Some of our systems don’t handle certain special characters well, and this could open us up to security risks like SQL injection or XSS.'

Tech Details:

Write a function removeSpecialChars(str) that strips out any special characters (except spaces) from a string.

This will be used to sanitize usernames and other sensitive inputs across our platform.

function removeSpecialChars(str) { /* ... */ }



// Example test cases
console.log(removeSpecialChars('Hello@World!')); // 'HelloWorld'
console.log(removeSpecialChars('User@ name123#')); //'User name123'
console.log(removeSpecialChars('#$%^&*()')); //'' (all special characters removed)
console.log(removeSpecialChars('Username123')); //'Username123' (no special characters to remove)
console.log(removeSpecialChars('John Doe')); //'John Doe' (spaces should remain)
console.log(removeSpecialChars('user-name_123')); //'username123' (removes dashes and underscores)
console.log(removeSpecialChars('Spaces   and $pec!al Chars!')); //'Spaces   and pecal Chars' (removes special characters but keeps spaces)
console.log(removeSpecialChars('!!!123ABCxyz!!!')); //'123ABCxyz' (removes exclamation marks)
console.log(removeSpecialChars('')); //'' (empty string should remain empty)


Task 4: Phone Number Formatting

Tech Lead's Request: 'Our forms allow users to enter phone numbers in various formats, but for consistency, we need to standardize them. Please write a function that formats a 10-digit number into a standard format so it's easier for our SMS services to handle.'

Tech Details:

Write formatPhoneNumber(phone) to transform a raw 10-digit phone number into the format (123) 456-7890.

This formatted version will be stored in the database and used in our frontend for a more professional user experience.

function formatPhoneNumber(phone) { /* ... */ }



// Example test cases
console.log(formatPhoneNumber('1234567890')); //'(123) 456-7890' (standard 10-digit phone number)
console.log(formatPhoneNumber('0987654321')); //'(098) 765-4321' (valid 10-digit phone number)
console.log(formatPhoneNumber('1234567')); //'Invalid phone number' (not enough digits)
console.log(formatPhoneNumber('123456789012')); //'Invalid phone number' (too many digits)
console.log(formatPhoneNumber('abcdefghij')); //'Invalid phone number' (non-numeric characters)
console.log(formatPhoneNumber('0000000000')); //'(000) 000-0000' (valid number, all zeros)
console.log(formatPhoneNumber('9998887777')); //'(999) 888-7777' (valid random 10-digit number)
console.log(formatPhoneNumber('123 456 7890')); //'Invalid phone number' (contains spaces)
console.log(formatPhoneNumber('(123)4567890')); //'Invalid phone number' (contains parentheses)
console.log(formatPhoneNumber('123-456-7890')); //'Invalid phone number' (contains dashes)
console.log(formatPhoneNumber('')); //'Invalid phone number' (empty string)
console.log(formatPhoneNumber(null)); //'Invalid phone number' (null input)
console.log(formatPhoneNumber(undefined)); //'Invalid phone number' (undefined input)



Task 5: Username Validation

Tech Lead's Request: 'We need to ensure all usernames follow a specific pattern for consistency and security reasons. The rules are simple: usernames should only contain letters, numbers, and underscores, and must be within a defined length.'

Tech Details:

Write a function isValidUsername(username) that checks if:

The username is between 5 and 15 characters long.

It only contains alphanumeric characters and underscores.

This function will be used during user registration to validate inputs.

function isValidUsername(username) { /* ... */ }


// Example test cases
console.log(isValidUsername('user_123')); // true
console.log(isValidUsername('validUsername')); // true
console.log(isValidUsername('user')); // false (too short)
console.log(isValidUsername('this_is_a_valid_username')); // false (too long)
console.log(isValidUsername('invalid@username')); // false (contains invalid character)



Task 6: Capitalize Words

Tech Lead's Request: 'When we display certain strings (like product titles or user names) on the UI, they need to be properly formatted. We want to capitalize the first letter of every word for better readability and consistency across the platform.'

Tech Details:

Create a function capitalizeWords(sentence) that capitalizes the first letter of every word in a given sentence.

This will be used for user-generated content like profile names or product descriptions.

function capitalizeWords(sentence) { /* ... */ }


// Example test cases
console.log(capitalizeWords('hello world')); // Hello World
console.log(capitalizeWords('this is a test')); // This Is A Test
console.log(capitalizeWords('   leading spaces')); // Leading Spaces
console.log(capitalizeWords('trailing spaces   ')); // Trailing Spaces
console.log(capitalizeWords('123 numbers and words')); // 123 Numbers And Words


Task 7: Extract Domain from Email

Tech Lead's Request: 'For some internal routing and logging, we need to extract the domain from users’ email addresses. This is important for cases where certain email providers (like corporate ones) need special handling.'

Tech Details:

Write a function extractDomain(email) that extracts and returns the domain (everything after the @) from a given email.

This will be used in reporting and routing based on email providers.

function extractDomain(email) { /* ... */ }


// Example test cases
console.log(extractDomain('user@example.com')); // example.com
console.log(extractDomain('admin@mail.domain.com')); // mail.domain.com
console.log(extractDomain('user@subdomain.example.com')); // subdomain.example.com
console.log(extractDomain('invalid-email')); // Invalid email
console.log(extractDomain('user@company.org')); // company.org


Task 8: Reversing a String

Tech Lead's Request: 'We’re implementing a unique encoding mechanism where part of the string needs to be reversed as part of the encryption process. Please write a function to reverse any string input.'

Tech Details:

Write reverseString(str) to reverse the characters in the input string.

This will be integrated into an encryption pipeline where certain sections of strings need to be reversed.

function reverseString(str) { /* ... */ }


// Example test cases
console.log(reverseString('hello')); // olleh
console.log(reverseString('world')); // dlrow
console.log(reverseString('12345')); // 54321
console.log(reverseString('racecar')); // racecar (palindrome)
console.log(reverseString('JavaScript')); // tpircSavaJ


Task 9: Checking Palindrome

Tech Lead's Request: 'As part of a coding challenge feature we’re adding for users, one of the tasks will be checking for palindromes. We need a utility function that can determine if a string reads the same forwards and backwards.'

Tech Details:

Write isPalindrome(str) to check whether a string is a palindrome (i.e., it reads the same forward and backward).

This function will be part of our coding challenge feature.

function isPalindrome(str) { /* ... */ }


// Example test cases
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('12321')); // true
console.log(isPalindrome('Was it a car or a cat I saw?')); // true


Task 10: Replace All Spaces

Tech Lead's Request: 'In some cases, we need to sanitize input URLs or file names that contain spaces. Replace all spaces with underscores so they can be safely used in URLs or filenames.'

Tech Details:

Implement replaceSpaces(str) to replace every space in a string with an underscore (_).

This function will be used when creating URLs or file names that need to be space-free for compatibility.

function replaceSpaces(str) { /* ... */ }


// Example test cases
console.log(replaceSpaces('hello world')); // hello_world
console.log(replaceSpaces('this has    multiple spaces')); // this_has____multiple_spaces
console.log(replaceSpaces('leading and trailing spaces  ')); // leading_and_trailing_spaces__
console.log(replaceSpaces('no_spaces_here')); // no_spaces_here
console.log(replaceSpaces('')); // (empty string)


Task 11: Extract Numbers from String

Tech Lead's Request: 'When we parse address strings or form inputs, sometimes we need to extract numbers from the string data (e.g., house numbers, amounts). Write a utility that can handle this.'

Tech Details:

Write a function extractNumbers(str) that extracts and returns all the numeric characters from a given string.

This will be used in form handling where addresses, amounts, or mixed content needs to be parsed.

function extractNumbers(str) { /* ... */ }



// Example test cases
console.log(extractNumbers('abc123def')); // 123
console.log(extractNumbers('my phone number is 1234567890')); // 1234567890
console.log(extractNumbers('no numbers here!')); // (empty string)
console.log(extractNumbers('the cost is $30.50')); // 3050
console.log(extractNumbers('room 101')); // 101


Task 12: Validate URL

Tech Lead's Request: 'Users are submitting URLs for content, but we need to make sure those URLs are valid and start with http:// or https:// before processing them in our system.'

Tech Details:

Write isValidURL(url) that checks if a given URL string starts with either http:// or https://.

This will be used in content submission and scraping systems to ensure proper URLs are stored and processed.

function isValidURL(url) { /* ... */ }



// Example test cases
console.log(isValidURL('<http://example.com>')); // true
console.log(isValidURL('<https://example.com>')); // true
console.log(isValidURL('<ftp://example.com>')); // false
console.log(isValidURL('example.com')); // false
console.log(isValidURL('http://')); // false


Task 13: Mask Email

Tech Lead's Request: 'For privacy reasons, we’re masking users' email addresses in certain UI views. Write a function that hides most of the email address, keeping only the first and last characters visible.'

Tech Details:

Implement maskEmail(email) to replace the middle part of the email (before @) with asterisks (``), but leave the first and last character visible.

This will be used in our UI for privacy when displaying user email addresses.

function maskEmail(email) { /* ... */ }



// Example test cases
console.log(maskEmail('user@example.com')); // u**r@example.com
console.log(maskEmail('a@domain.com')); // a@domain.com
console.log(maskEmail('ab@domain.com')); // a*@domain.com
console.log(maskEmail('username@domain.com')); // u******e@domain.com
console.log(maskEmail('')); // Invalid email
