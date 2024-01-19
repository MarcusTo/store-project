<template>
  <div class="sidebar">
    <div class="sidebar__items">
      <ul>
        <li
          v-if="false"
          :class="{ sidebar__active: isRouteActive(ROUTE_PATHS.PRODUCTS) }"
        >
          <RouterLink :to="ROUTE_PATHS.PRODUCTS">
            ><i
              class="pi pi-info"
              :class="{
                'sidebar__active-text': isRouteActive(ROUTE_PATHS.PRODUCTS),
              }"
            ></i>
            <p
              class="t-title-small"
              :class="{
                'sidebar__active-text': isRouteActive(ROUTE_PATHS.PRODUCTS),
              }"
            >
              {{ $t("sidebar.about") }}
            </p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ROUTE_PATHS } from "@/router/paths";
import { RouterLink } from "vue-router";

