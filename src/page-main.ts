import { ElementGetter } from "./utils/element-getter.js";
import { REQUEST_FILE } from "./constants/constants.js";
import { RequestSetter } from "./components/requests-setter.js";
import { RequestsConverter } from "./domain/requests-converter.js";
import { COLUMN_KEYS } from "./constants/column-key-relation.js";

ElementGetter.getElementById('import_file').addEventListener('change', async (e) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  showRequestData(file);
});

window.onload = async function() {
  // load post method
  showRequestData(REQUEST_FILE);
}

async function showRequestData(file: string | File){
    RequestSetter.show(await RequestsConverter.convert(file, COLUMN_KEYS), COLUMN_KEYS);
}
