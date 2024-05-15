# openapi-extract

![ci](https://github.com/Mermade/openapi-extract/workflows/ci/badge.svg)

Extract paths, operations, parameters, schemas etc from OpenAPI/Swagger definitions.

Works with OpenAPI/Swagger 2.0 and 3.x definitions.

```
Usage: openapi-extract [options] {infile}

Options:
  -h, --help             Show help                                     [boolean]
  -p, --path             the path to extract                            [string]
  -i, --info             copy full info object, otherwise minimal      [boolean]
```

Stripped version of the openapi-extract package <https://github.com/Mermade/openapi-extract>. Our only use is to take the openapi documentation path names, to allow a comparison to laravel artisan routes.

The `options` object takes the same values as the CLI, for these keys and default values:

*   path = ''
*   info = false
