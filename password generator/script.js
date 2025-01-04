document.getElementById('generateBtn').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;
  
    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial);
    document.getElementById('password').value = password;
  });
  
  document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(passwordField.value)
      .then(() => alert('Password copied to clipboard!'))
      .catch(() => alert('Failed to copy password.'));
  });
  
  function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSpecial) chars += '!@#$%^&*()_+[]{}|;:,.<>?';
  
    if (chars === '') {
      alert('Please select at least one character type.');
      return '';
    }
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }
  