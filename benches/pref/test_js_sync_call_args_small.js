function test() {
    var i;

    for(i = 0; i < 1e5; i++) {
        var r;
        r = NativeObject.call(0x1, [0xffffffff]);
    }
    __gc();
}