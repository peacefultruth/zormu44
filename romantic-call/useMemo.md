# React44ms.Api.useMemo

Not `React.useMemo`.

If you're using the ootb shit, it's it's own implementation no React involved.

The only difference is in how things update when state changes in 44.

State changes have to be propagated on React's watch.

Delivery of changes is Leaf Respecting.

It only delivers changes if someones listening.

And it only delivers to every listening on the most specific identifying.
