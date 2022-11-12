function Header() {
  return (
    <nav class="nav sticky-top bg-light nav-pills nav-fill">
      <a class="nav-link active" aria-current="page" href="#">
        HOME
      </a>

      <div class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          TAKING A TEST
        </a>
        <ul class="dropdown-menu nav-pills nav-fill">
          <li>
            <a class="dropdown-item" href="#">
              Pure Tone Test
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Masked Noise Test
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Spatial Audio Test
            </a>
          </li>
        </ul>
      </div>
      <a class="nav-link" href="#">
        HEARING Q&As
      </a>
      <a class="nav-link" href="#">
        SIGN-UP
      </a>
      <a class="nav-link" href="#">
        LOG-IN
      </a>
    </nav>
  );
}

export default Header;
