const source1 = document.getElementById('templateContent').innerHTML;
const source2 = document.getElementById('templateMenu').innerHTML
const template1 = Handlebars.compile(source1);
const template2 = Handlebars.compile(source2);
const  context1 = {
    name: "Muhammad Adil",
    intro: "I'm a Front End Developer and a Computer Science Student.I'm also a Programmer and a member of Google Community.You can know more about me.",
};
const context2 = {
    menus: [About,Skills,Contact]
}
const compiledHTML = template1(context1);
const compliedMenu = template2(context2);
document.querySelector('.content').innerHTML = compiledHTML;
document.getElementById('navigation').innerHTML= compliedMenu;
