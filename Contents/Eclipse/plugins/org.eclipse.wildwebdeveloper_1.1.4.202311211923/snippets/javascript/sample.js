/**
 * This is about <code>Example.js</code>.
 * {@link com.yourCompany.aPackage.aFile}
 * @author author
 * @deprecated use <code>BetterExample.js</code>
 */
var index = 0;
var arr = [];

function foo() {
    /* This comment may span multiple lines. */
    var var1 = new Object();
    var obj = { carMake: 'Amet', carModel: 'Porro', carYear: 2012 };
    var s = "abc123";
    clear(var1);    
    var template = `This is a template literal value,
      it may span multiple lines.`;
}

function pop() {
    return arr[index--];
}

function push(elem) {
    // This comment may span only this line
    arr[index++] = elem;
}

function isEmpty() {
    // TASK: refactor
    return index == 0;
}

