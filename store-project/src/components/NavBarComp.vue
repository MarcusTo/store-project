<template>
  <div>
    <div class="navbar" style="width: 100%; display: flex; justify-content: space-between;">
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">Home</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/products">Tooted</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/services">Hooldus</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/about">Ettevõttest</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/profile">Profiil</RouterLink>
        </li>
      </ul>

      <div>
        <RouterLink to="/cart" class="nav-bar__router-link">
          <button class="button">
            <i class="pi pi-shopping-cart"></i>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>

.navbar {
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button{
  color: black;
  display: absolute;
  background-color: #d3d3d3;
  margin-right: 40px; 
  
}

.ul {
  list-style: none;
  display: flex;
  gap: 16px;
  text-align: center;
}

.custom-list-item {
  padding: 10px;
}
</style>
