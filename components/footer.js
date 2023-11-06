const footer = document.createElement('template');

footer.innerHTML = `
    <!-- Footer -->
    <footer class="footer">
        <div class="row">
            <div class="col">
                <h4>GrocerEase</h4>
                <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="col">
                <h4>About</h4>
                <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                </ul>
            </div>
            <div class="col">
                <h4>Connect</h4>
                <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">(123) 456-789</a></li>
                <li><a href="#"></a></li>
                </ul>
            </div>
        </div>
    </footer>
`;

document.getElementById("footer").appendChild(footer.content);