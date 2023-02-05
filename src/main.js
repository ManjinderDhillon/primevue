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
import CaleNdar from "primevue/calendar";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import TableRow from "primevue/row";
import CaRd from "primevue/card";
import DropDown from "primevue/dropdown";

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
app.component("CaleNdar", CaleNdar);
app.component("DropDown", DropDown);
app.component("CaRd", CaRd);
app.component("ColumnGroup", ColumnGroup);
app.component("TableRow", TableRow);

//optional for row

app.component("DataTable", DataTable);
app.component("ContextMenu", ContextMenu);

app.mount("#app");
