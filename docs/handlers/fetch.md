# Fetch Handler
The **fetch handler** allows you to access and manipulate parts of the HTTP channel, such as requests and responses.

It can be seen as a bridge or proxy to other REST services.

For testing you can use Postman or ThunderClient if you use VSCode.

## Create a call to another REST service without sending parameters.
We are going to use the Github API as an example so that it returns the data of a particular user.


    https://api.github.com/users/edwinspire

[Video tutorial](https://youtu.be/zcUoMxmmx-M)



## Create a call to another REST service with parameters.
The same parameters that you send to the original service are the ones that you must send in the OpenFusionAPI.
We will use the following public testing service:

    https://fakestoreapi.com/carts


Use the GET method and receive "userId" as a parameter.

[Video tutorial](https://youtu.be/d_aR-s62S5I)
