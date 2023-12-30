<script>
function validateForm() {
    const firstName = document.forms["query"]["firstname"].value;
    const lastName = document.forms["query"]["lastname"].value;
    const email = document.forms["query"]["Email"].value;
    const query = document.forms["query"]["subject"].value;

    // Basic validation
    if (firstName === "" || lastName === "" || email === "" || query === "") {
      alert("All fields must be filled out");
      return false;
    }

    // Email validation using a simple regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
}
</script>