document.querySelector("header").innerHTML += `
 <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm border-bottom border-secondary" >
        <div class="container-fluid">
          <a class="navbar-brand m-1">
            <img src="assets/images/logo.png" alt="logo" width="150px" height="60px">
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link px-2  fw-semibold" aria-current="page" href="index.html" style="color:#462009;">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2  fw-semibold" href="about.html" style="color:#462009;">ABOUT US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2  fw-semibold" href="blog.html" style="color:#462009;">BLOG</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2  fw-semibold" href="gallery.html" style="color:#462009;">GALLERY</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle px-2  fw-semibold " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color:#462009;">
                  TOP CUISINES
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a  class="dropdown-item" href="italy.html">ITALIAN</a></li>
                  <li><a class="dropdown-item" href="mexico.html">MEXICAN</a></li>
                  <li><a class="dropdown-item" href="china.html">CHINESE</a></li>
                  </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link px-2  fw-semibold" href="contact.html" style="color:#462009;">CONTACT US</a>
              </li>
            </ul>
          </div>
        </div>

  </nav>
`;
