'use strict';

document.addEventListener("DOMContentLoaded", contentLoaded);

function contentLoaded(event){
    const oasisReservedRightsEl = document.getElementById("oasis-year");
    const date = new Date();
    const currentYear = date.getFullYear();

    const rightsReservedStr = `© OASIS ${currentYear}. All rights reserved.`;
    oasisReservedRightsEl.innerText = rightsReservedStr;
}