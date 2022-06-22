import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /*webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout.vue"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /*webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage.vue"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutPage" */ "@/modules/pokemon/pages/AboutPage.vue"
          ),
      },
      {
        path: "pokemonid/:id",
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage" */ "@/modules/pokemon/pages/PokemonPage.vue"
          ),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },
  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /*webpackChunkName: "dbz-layout" */ "@/modules/dbz/layouts/DragonBallLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /*webpackChunkName: "dbz-characters" */ "@/modules/dbz/pages/Characters"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /*webpackChunkName: "dbz-about" */ "@/modules/dbz/pages/About"
          ),
      },
    ],
  },
  {
    path: "/:pathMath(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NoPageFound" */ "../modules/shared/pages/NoPageFound.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//Guard Global - Sincrono
// router.beforeEach((to, from, next) => {
//   console.log({ to, from, next });

//   const random = Math.random() * 100;

//   if (random > 50) {
//     console.log("Autenticado");
//     next();
//   } else {
//     console.log(random, "Bloqueado por el beforeEach Guard");
//     next({ name: "pokemon-home" });
//   }
// });

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;

//     if (random > 50) {
//       console.log("Autenticado - canAccess");
//       resolve(true);
//     } else {
//       console.log(random, "Bloqueado por el beforeEach Guard - canAccess");
//       resolve(false);
//     }
//   });
// };

// //Guard Global - Asincrono
// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();

//   authorized ? next() : next({ name: "pokemon-home" });
// });

export default router;
