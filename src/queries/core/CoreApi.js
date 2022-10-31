import Request from '../../libs/request/request'

export class CoreApi {
  http = Request

  constructor(_base_path) {}

  params = (params) => {
    return { params: this.parserData(params) }
  }
  parserData = (params) => {
    return new URLSearchParams(params).toString()
  }

  parserDataParam = (obj) => {
    var str = []
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
      }
    return str.join('&')
  }
}
