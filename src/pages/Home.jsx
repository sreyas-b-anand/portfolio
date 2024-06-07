import Navbar from "../Components/Navbar";
import "./Home.css";

function Home() {
  document.addEventListener("DOMContentLoaded", () => {
    const span = document.querySelector(".span");

    function setRandomDirection() {
      let randomX = Math.random() * window.innerWidth + "px";
      let randomY = Math.random() * window.innerHeight + "px";
      console.log(randomX, randomY);

      span.style.setProperty("--random-x", randomX);
      span.style.setProperty("--random-y", randomY);
    }

    setRandomDirection();
    span.addEventListener("animationiteration", setRandomDirection);
  });

  return (
    <>
      <div className="page">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="homepage">
          <div className="social">
            <div className="intro">
              Hi,My name is{" "}
              <p className="name">
                SREYAS B ANAND{" "}
                <div className="photodiv">
                  <img
                    alt="image"
                    src="https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480"
                    className="photo1"
                  />
                   <img
                    alt="image"
                    src="https://avatars.mds.yandex.net/i?id=b507a2b8d9382967a186c654f1eeaa74-5262078-images-taas-consumers&n=27&h=480&w=480"
                    className="photo2"
                  />
                </div>
              </p>
            </div>

            <br />
            <section className="welcome">
              WELCOME TO MY PORTFOLIO <p className="website">WEBSITE</p>
            </section>
            <div className="image">
              <a href="https://github.com/SREYAS1045">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgAAkv24Dfmnjrx1E82oOI6llnjefVdwfsw&s" />
              </a>
              <a href="https://www.linkedin.com/in/sreyas-b-anand-8113a8298">
                <img src="data:image/png;base64,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" />
              </a>
              <a href="mailto:sreyas1045@gmail.com">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8dHRsQEA1ra2oNDQp3d3cGBgAYGBbw8PA2NjSvr64AAAAbGxkWFhQTExADAwD29vaTk5Ln5+fy8vKmpqXg4OCAgH/Q0NAoKCba2toxMS+fn55kZGNaWlhHR0bq6uqHh4a/v75LS0lSUlG0tLQlJSM/Pz7T09ONjYzHx8ZeXl2hoaCCgoG7u7sUXKf6AAAKCElEQVR4nO2daWOiOhSGATFYEhap1n0dl9rq//97186InIMsCSTIrXk/zoDNQ0JyNhLD0NLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSalhhNNrN+uduO3Tuz3ajKJSHF7ndpWnZhNht0bUplrnsupEMvHDTcajtMbNtYp5Nnc6mbk/2BltqtY8uFrPodtCrA+geiPdsihJ55OBW5os6tO18P/Jop+L7uBvbz248p+zxrgJf2LX/Dx34T57dFZ5xwg5NTTDM8622yE/P7YzO38UAewuCfsAi1ni5mHfaofliOb62CFGSP0JzaogAHWLOZ6OVRBuitsLVcTY3iQMR5wINvA5R0H9k2p+oa2sNTfpTAvqRCryLfQBombNaS6pS9WbX9iWIfd77LskIZ2QxVNnE2houkm5k1oXzpvF9mXCsfpveviyFfev+Nnpjvu7o3mcZZlc3iJrTwL4jki7PDaMg7nZGq5gKzesUxIgsGHFc/xW/u8wfKG+cHO38uFOsr/KrT/erCffU9HR9knuvnEov7sTmtr8VtIOeqPetf2u13Sm7dsJuXcg8niHdFo1iQ5WxMuukH8Rj9NxI02TpHI/ToOTdCg9ePKDbaanlaRJPH96heAWfxG+hNW+oabI0j5cAUtw1g9giJRv8H5H7OZASu5OiaPCZjiRu4mFKi9e4zu1JOG/Y3HanlNApp9mnXJe/rcEkvbfbsm8Vz6bL22toY/Pnm/7c7rXEBBj4P630KDYp487xlkX3rva395UglqHz7/k4ZKagwaKa3Rxfx0R29uA2TNl+VXDzMR7MFjINdvHbyejzEWf3ABI2m0/3qeZYcHf8ujKGHs/s7hGzp5ty/cQfxI97GNsq6UkS6ZLd05fE5382IgA0KZr5kjesaELc3QidKZpKw20SG2Z0raLlnFqDGKe9RWt7b3qbTEmRz+fGhKnFYvLm33/YpJ8q2s6lTxBA8t/w0n5fLkiR255HaBynCSIja+lN59MaDFF/mppQahIakzFApB+y286lDzBE/XHaOKtLaEwOMG73DMQPGOM8PFiftQnTiE3H4MISQAmExvANIPJFtSSqC/IM1ltG1FACoTFEvVgaLpCqDurBrLCoDEJjuLQhYnMDFSVS7GVm3FcKIUYknaZCVe8dUgooidCIDhBRNCtZUe9zCHjIccQlERqrPxBRLCtZUb0/EPBPnm8ki9BYLQCivSjyxeSI9w9KI7z+RfRIVQdvIjRoCp6oPELj/Qu992oRIzS3fRW8+BIJU1Nb5uIkS8MD9+Qtk/CKCNffnNlbhoZLYGMExauTVEK8AmebGDKUMqKKLQy5hFczMQCIUzWIwynswTJDWDah8YEsYRVJjgmy9Ev9NemEZe5abYk6pPIJEaI/lY04mfpCgCoIcdhkXBSHFddxLBoYUkGIQ19TmTnj0VQ4uKeEUBliBUBFhFfEZKB6rLwOgk8nlhTvMt7wrCJCFGX3zKKMAb82JgDkziKoIjT6sBf3MnKolz3sQe40iTJCjMjq14ntWCVAhYTGd1IcaDq0bq2fS8GvWd/8NyokNAY+aJRfD9FFvyWSVVdJiJ97rWQ/elhi40EpIXryjAoMrZS+wTstOhrUEho7OMFXTvbP4KRlCk5aigmNC5wB7WqIMxvOyqILj2pCYwMHql0l2d+34RAVNh6UExqnagv1Xdh0EDcA1RMapzFALCuCfFA/AIDjChZuA4TGCdmTYvUMn8i+rWLCN0F4Hagw2S+CCH0UvxJgM4Qpv46/yngtwc9shhAjkjNfDjU8k/qATREaRzhQOZP9XRjv2VeN9zRFiGqLuD6YC7toiFYOaDVGaEwO4LtHWpoJRzkQp0bctTlC4xt+Al6W7Ed5LNOvUeDRHOFljL/P/SoaqCHMRZo/1deVCzwaI3SBx/9XwSL/t3qLAF9s0qIkaKGaIvwmKcCi1PQKfzF+u7piUrkhQugfJEMvp34C1XWAq6vl6pohhNYlbPQ26+d6oPLYBPdVzJs3QviBghBg0wl7+zj0IgjoA0PBtColshogRPWR3t5FlUwPiAgwmE/g1f5bhXW/AUJYH+ntN9eVAEyU6aoUVEUSXFeU93lN00Y5ISpe8Pc/5nOI69Hg25Wqjwv//kAAf0DYg1JN2PuCSe/bKEONhiUbqMgiiIsszsgLblkkKoIrW5LVT1WlxP88yakigW5iy6KJaNqwQY0yRrz9ByqnRmUyazQZiwXPlRIOpxAQzSkhLLz5N4Eg/yrAhihMRwpGllUSokGXrlZMuX+jVKQjbWnDqLDYN1YKCY+osufRCMWIAwz48GuDoGJkWR0hrAu5rmwZrgG0BBwb+sdZZTKuDyPLa+52KCOEQVKTZLt357SPdHsc2cE4mOUW+HRFFSFfc9bpjcMK+wfmB/Ie2qMUEbomHHT5AdJHxKIBODJhTJJzhys1hAOQ/GVBfpMfHcfiSQTNt0VBAiAlhDCjWTbvzZDryEq+CsfzM1e5vApC2C/lyzNELANMFZdmuZcPUkD4CfJhDkfyPgnhOKT8alTDnvuhDJB8wjWqFOKpKojrGfhqENCHFnZ5FbJswvADrHEOZ7WXa/9MID7nDmIr6EFbpW6/ZMIQOfQer7t6WlJKD7xXh3ORpJtcwvd5RX88PJ6O/FFt5EGXVT5KJUSRXLnFwVjI9/KcQp9YJiGaA2rkwziE4neOV9R2iYQrGCarFtsUEIrBFs1R8gjxQqXwo6ebPqFdEeQvpNIIUw59A3t/Irc/v6BMFmGZQ69C38Brzq/TkUQ4gg698P7LVYWLO9fZF8kh3CCHvrkP8i/w7+aUP0gh3HH8ITXaOOAvB5mPVgYhSmBnhMlUCo0emuX2SyAcEPg2NL1/ywnOAOTrsX31Cb9RrLb5nZRwQdlj4rw2YfVgtCwdsdufRuQjzNnry8AVvM/aem9SaE3x7fWVs18brv90nGftgY3d/lRkg2+/tpw99+Au7VcL/3lbYKJNQFKVj3x77uXsm2jMk2fnOM/c47MHqsQY3hmSb9/EnL0vje19MZL1jWFVwegCRa43396XefuXJltgV6mil6okq8ws5Jry7V+atwdtvL2nP37+Ftj3yIa9gJYN7x60OfsIh/OfuZSRKpU80hV+/M2W2Hv0GvLuI5y3F3TYNwNCqp6rJFuDMSV26uAN3r2g8/fzjlz3+SM0VrQbpBrDvZ/379+T/QX21f/9ZyPA8y2et9esqITOt/j9Z5S8wDkzv/+soBc47+n3n9n1AueuvcDZeb///MMXOMPyBc4hfYGzZI3ffx6w8QJnOhu//1xu4wXOVr8q3HQcaqfnrhaIeTZ1Ohspq3TkdpemZRNit0XXpljmsps+mayOwmi0m/XP3Xbo3J/tRlGbbCwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0trRfRf5zzzYUAFgiVAAAAAElFTkSuQmCC" />
              </a>
            </div>
          </div>
        </div>
        <span className="span"></span>
      </div>
    </>
  );
}
export default Home;
