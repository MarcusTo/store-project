<template>
  <div>
    <div class="navbar" style="width: 100%">
      <ul class="ul">
        <li class="custom-list-item">
          <RouterLink to="/">Home</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/products">Tooted</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/cart">Ostukorv</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/orders">Tellimused</RouterLink>
        </li>

        <li class="custom-list-item">
          <RouterLink to="/about">Ettevõttest</RouterLink>
        </li>
        <li class="custom-list-item">
          <RouterLink to="/profile">Profiil</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.navbar {
  color: #888;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px; /* Add some padding for better appearance */
  position: absolute;
  width: 100%;
  top: 0;
  left: 0px;
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
