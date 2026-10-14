import state from "./state.js";
import { render, siapkanForm } from "./dom.js";
import { pasangEventForm, pasangEventFilter } from "./events.js";

siapkanForm();
render(state.daftarProyek);
pasangEventForm();
pasangEventFilter();