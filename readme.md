<!-- @format -->

# PROJECT RESTFUL API

API ini menyediakan berbagai endpoint yang memungkinkan Anda untuk mengelola produk dan variannya secara efektif. Selain itu, API ini juga menyediakan fitur registrasi dan login untuk otentikasi pengguna.

## Fitur

1. Registrasi User dan login
2. Create, Read, Update, dan Delete Product
3. Create, Read, Update, dan Delete Variant

## Dokumentasi

- **/register**

| method | headers | params | body                |
| ------ | ------- | ------ | ------------------- |
| `POST` | -       | -      | `{email, password}` |

### Respon Sukses

status: `201`

content:

```
{
    "id": Integer,
    "email": String,
    "password": String,
    "createdAt": Date,
    "updatedAt": Date,
}
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

- **/login**

| method | headers | params | body                |
| ------ | ------- | ------ | ------------------- |
| `POST` | -       | -      | `{email, password}` |

### Respon Sukses

status: `200`

content:

```
{
    "id": Integer,
    "email": String,
    "token": String
}
```

### Respon Error

status: `401`

content:

```
{
     "err": String
}
```

- **/products**

| method | headers          | params | body                                                           |
| ------ | ---------------- | ------ | -------------------------------------------------------------- |
| `POST` | `{token: Sting}` | -      | `{ prod_name, prod_desc, prod_price, prod_image_url, userId }` |

### Respon Sukses

status: `201`

content:

```
{
    "id": Integer,
    "prod_name": String,
    "prod_desc": String,
    "prod_price": Integer,
    "prod_image_url": String,
    "userId": Integer,
    "createdAt": Date,
    "updatedAt": Date
}
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

- **/products**

| method | headers           | params | body |
| ------ | ----------------- | ------ | ---- |
| `GET`  | `{token: String}` | -      | -    |

### Respon Sukses

status: `200`

content:

```
[
    {
        "id": Integer,
        "prod_name": String,
        "prod_desc": String,
        "prod_price": Integer,
        "prod_image_url": String,
        "userId": Integer,
        "createdAt": Date,
        "updatedAt": Date,
        "variants": [
            {
                "id": Integer,
                "variant_name": String,
                "variant_color": String,
                "variant_price": Integer,
                "prodId": Integer,
                "userId": Integer,
                "createdAt": Date,
                "updatedAt": Date
            }
        ]
    }
]
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

- **/products**

| method | headers           | params          | body |
| ------ | ----------------- | --------------- | ---- |
| `GET`  | `{token: String}` | `{id: Integer}` | -    |

### Respon Sukses

status: `200`

content:

```
[
    {
        "id": Integer,
        "prod_name": String,
        "prod_desc": String,
        "prod_price": Integer,
        "prod_image_url": String,
        "userId": Integer,
        "createdAt": Date,
        "updatedAt": Date,
        "variants": [
            {
                "id": Integer,
                "variant_name": String,
                "variant_color": String,
                "variant_price": Integer,
                "prodId": Integer,
                "userId": Integer,
                "createdAt": Date,
                "updatedAt": Date
            }
        ]
    }
]
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

- **/products**

| method | headers           | params          | body                                                           |
| ------ | ----------------- | --------------- | -------------------------------------------------------------- |
| `PUT`  | `{token: String}` | `{id: Integer}` | `{ prod_name, prod_desc, prod_price, prod_image_url, userId }` |

### Respon Sukses

status: `200`

content:

```
{
    "id": Integer,
    "prod_name": newString,
    "prod_desc": newString,
    "prod_price": newInteger,
    "prod_image_url": newtring,
    "userId": Integer,
    "createdAt": Date,
    "updatedAt": Date
}
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

status: `403`

content:

```
{
    "err": Access forbidden!
}
```

- **/products**

| method   | headers           | params          | body |
| -------- | ----------------- | --------------- | ---- |
| `DELETE` | `{token: String}` | `{id: Integer}` | -    |

### Respon Sukses

status: `200`

content:

```
1
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

status: `403`

content:

```
{
    "err": Access forbidden!
}
```

- **/variants**

| method | headers          | params | body                                                             |
| ------ | ---------------- | ------ | ---------------------------------------------------------------- |
| `POST` | `{token: Sting}` | -      | `{ variant_name, variant_color, variant_price, prodId, userId }` |

### Respon Sukses

status: `201`

content:

```
{
    "id": Integer,
    "variant_name": String,
    "variant_color": String,
    "variant_price": Integer,
    "prodId": Integer,
    "userId": Integer,
    "createdAt": Date,
    "updatedAt": Date
}
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

- **/variants**

| method | headers           | params | body |
| ------ | ----------------- | ------ | ---- |
| `GET`  | `{token: String}` | -      | -    |

### Respon Sukses

status: `200`

content:

```
{
    "id": Integer,
    "variant_name": String,
    "variant_color": String,
    "variant_price": Integer,
    "prodId": Integer,
    "userId": Integer,
    "createdAt": Date,
    "updatedAt": Date
}
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

- **/variants**

| method | headers           | params          | body |
| ------ | ----------------- | --------------- | ---- |
| `GET`  | `{token: String}` | `{id: Integer}` | -    |

### Respon Sukses

status: `200`

content:

```
{
    "id": Integer,
    "variant_name": String,
    "variant_color": String,
    "variant_price": Integer,
    "prodId": Integer,
    "userId": Integer,
    "createdAt": Date,
    "updatedAt": Date
}
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

- **/variants**

| method | headers           | params          | body                                                             |
| ------ | ----------------- | --------------- | ---------------------------------------------------------------- |
| `PUT`  | `{token: String}` | `{id: Integer}` | `{ variant_name, variant_color, variant_price, prodId, userId }` |

### Respon Sukses

status: `200`

content:

```
{
    "id": Integer,
    "variant_name": newString,
    "variant_color": newString,
    "variant_price": newInteger,
    "prodId": Integer,
    "userId": Integer,
    "createdAt": Date,
    "updatedAt": Date
}
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

status: `403`

content:

```
{
    "err": Access forbidden!
}
```

- **/products**

| method   | headers           | params          | body |
| -------- | ----------------- | --------------- | ---- |
| `DELETE` | `{token: String}` | `{id: Integer}` | -    |

### Respon Sukses

status: `200`

content:

```
1
```

### Respon Error

status: `400`

content:

```
{
    "err": String
}
```

status: `401`

content:

```
{
    "err": You should login first!
}
```

status: `403`

content:

```
{
    "err": Access forbidden!
}
```
