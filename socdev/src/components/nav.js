const Nav = (props) => {

 return <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">devNet</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/spots">Projects</a>
            <a class="nav-link" href="/spots/new">New Project</a>
          </div>
          <div class="navbar-nav ms-auto">
            <form
              action="/search"
              class="d-flex me-2"
              role="search"
              method="GET"
            >
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search a Project"
                aria-label="Search"
                name="search_query"
                required
              />
              <button class="btn btn-outline-light" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </form>
            <a class="nav-link" href="/users/new">Sign Up</a>
            <a class="nav-link" href="/sessions/new">Log In</a>
             <form action="/sessions?_method=DELETE" method="POST">
                <button type="submit" class="btn btn-outline-light btn-sm">
                  <i class="bi bi-box-arrow-right"></i> Log Out
                </button>
              </form> 
          </div>
        </div>
      </div>
    </nav>
}

export default Nav;