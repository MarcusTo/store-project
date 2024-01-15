<template>
    <div class="min-height-300 position-absolute w-100" style="min-height: 300px; background-color: #1B2B4B; position: absolute; width: 100%; z-index: -5;"></div>
    <div style="margin: 0 auto; max-width: 1980px">
      <SideBarComp />
      <div class="root">
        <NavBarComp />
  
        <div style="margin-left: 16px;">
          <slot />
        </div>
      </div>
    </div>
  </template>