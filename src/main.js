import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import ButTon from "primevue/button";
import ToAst from "primevue/toast";
import ColUmn from "primevue/column";
import DataTable from "primevue/datatable";
import ToastService from "primevue/toastservice";
import ContextMenu from "primevue/contextmenu";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component("InputText", InputText);
app.component("ButTon", ButTon);
app.component("ToAst", ToAst);
app.component("ColUmn", ColUmn);

app.component("DataTable", DataTable);
app.component("ContextMenu", ContextMenu);

app.mount("#app");
