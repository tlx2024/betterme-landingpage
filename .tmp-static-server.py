import http.server, socketserver, os
os.chdir(r'D:\0workspace\repo\betterme-landingpage\dist')
class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split('?', 1)[0]
        if path == '/' or ('.' not in path.rsplit('/', 1)[-1]):
            self.path = '/index.html'
        return super().do_GET()
with socketserver.TCPServer(('127.0.0.1', 4177), Handler) as httpd:
    httpd.serve_forever()
