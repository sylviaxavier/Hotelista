<template>
  <header>
    <nav>
      <div class="navbar">
        <div class="navbar-wrap">
          <a class="navbar-logo" href="">
            <img
              class="navbar-logo"
              src="@/assets/logotipo/Hotelista_com_fundo.png"
              alt="Logotipo Hotelista - Página home"
            />
          </a>
          <div class="navbar-menu-wrap">
            <div class="navbar-menu">
              <a class="navbar-link" href=""
                ><router-link to="/">Home</router-link></a
              >
              <a class="navbar-link" href=""
                ><router-link to="/reservas">Reserve já</router-link></a
              >
              <a class="navbar-link" href=""
                ><router-link to="/acomodacoes"
                  >Nossas Acomodações</router-link
                ></a
              >
              <a class="navbar-link" href=""
                ><router-link to="/Contato">Contato</router-link></a
              >
              <a class="navbar-link" href=""
                ><router-link to="/Sobre">Sobre</router-link></a
              >

              <i class="navbar-dropdown-wrap">
                <img
                  class="user-logo navbar-dropdown-button"
                  src="@/assets/user.png"
                />
                <div class="navbar-dropdown">
                  <p class="navbar-user">Olá, usuário!</p>
                  <a class="navbar-link" href="">Login</a>
                  <a class="navbar-link" href="">Cadastre-se</a>
                </div>
              </i>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </header>
  
</template>

<script>
export default {
  name: "NavBarHeader",
};
</script>
<style scoped>
* {
  /*Encontrar poppins */
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
a {
  color: #333333;
  text-decoration: none;
}
nav{
	margin: 0;
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	z-index: 100;
	width: 100vw;
  background-color: aqua;
}

.navbar {
  display: block;
  font-size: 14px;
  color: #333333;
  background-color: #ffffff;
  border-bottom: 2px solid #333333;
}

.navbar-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

a.navbar-logo {
  text-decoration: none;
  color: #333333;
  display: flex;
  align-items: center;
  padding-left: 0%;
  width: 5em;
  height: 5em;
  transition: 0.5s;
}

a.navbar-logo:hover {
  opacity: 0.7;
}

img.navbar-logo {
  width: 100%;
}
.user-logo {
  width: 8%;
  cursor: pointer;
  margin: 0 0 0 80%;

}

.navbar-menu {
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  align-items: center;
  margin-left: 0;
}

.navbar-button {
  display: none;
}

.navbar-link {
  display: inline-block;
  vertical-align: middle;
  margin: 0 1em 0 1em;
  padding: 0;
  color: #333333;
  text-decoration: none;
  transition: 0.5s;
}
.navbar-link:hover:not(.active),
.navbar-dropdown-button:hover {
  opacity: 0.7;
}
.navbar-dropdown-wrap {
  text-decoration: none;
  font-style: normal;
  position: relative;
  margin-left: 1em;
}

.navbar-dropdown-wrap,
.navbar-link:hover {
  text-decoration: underline;
}

.navbar-dropdown-button {
  display: inline;
  cursor: pointer;
  font-family: "Material Icons";
  vertical-align: middle;
  font-size: 36px;
  border-radius: 50%;
  padding: 0;
  margin-block: 0;
}

.navbar-dropdown {
  display: none;
  position: absolute;
  transform: translate3d(0, -1vh, 0);
  background-color: #ffffff;
  margin-top: 2%;
  margin-left: 60%;
  width: 10em;
  z-index: 101;
  border: 2px solid #333333;
  padding: 1em 0 1em 2em;
}

.navbar-dropdown-wrap:hover .navbar-dropdown {
  display: block;
}

.navbar-dropdown-wrap:hover .navbar-dropdown-button {
  opacity: 0.7;
}

.navbar-dropdown a,
.navbar-user {
  display: inline-block;
  padding: 0;
  color: #333333;
  line-height: 0;
  width: 100%;
  text-align: left;
  margin: 0;
  padding-left: 5%;
}
@media (max-width: 600px) and (orientation: portrait){
  /* CABEÇALHO */
	header {
		position: static;
	}

	.navbar-wrap,
	.navbar-menu {
		flex-direction: column;
		margin-top: 1em;
	}

	.navbar-link {
		margin: 0.25em 0 0.25em 0;
		text-align: center;
	}

	.navbar-dropdown-wrap {
		margin: 1em 0 1em 0;
		text-align: center;
	}

	.navbar-dropdown {
		left: -25%;
	}
}
</style>
