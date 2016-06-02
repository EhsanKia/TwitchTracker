from datetime import date
import jsbeautifier
import cssbeautifier
import requests
import hashlib
import json
import git


FILE_LIST = [
    # CSS
    "https://web-cdn.ttvnw.net/styles/application.css",
    "https://web-cdn.ttvnw.net/styles/application-blessed1.css",
    "https://player.twitch.tv/css/player.css",

    # JS
    "https://www.twitch.tv/assets/global.js",
    "https://www.twitch.tv/assets/emberhelper.js",
    "https://web-cdn.ttvnw.net/emberapp.js",
    "https://player.twitch.tv/js/player.js",
    "https://www.twitch.tv/tmilibs/tmi-v3.js"
]


try:
    with open('checksums.json') as fp:
        checksums = json.load(fp)
except:
    checksums = {}


for link in FILE_LIST:
    filename = link.split('/')[-1]
    ext = filename.split('.')[-1]

    bfier = jsbeautifier if ext == "js" else cssbeautifier

    req = requests.get(link)
    md5 = hashlib.md5(req.content)
    if md5.hexdigest() == checksums.get(filename):
        print "Skipping", filename
        continue

    checksums[filename] = md5.hexdigest()
    clean = bfier.beautify(req.content)
    print "Finished", filename

    path = "{}/{}".format(ext, filename)
    with open(path, 'w') as fp:
        fp.write(clean)


with open('checksums.json', 'w') as fp:
    json.dump(checksums, fp)

repo = git.Repo('.')
try:
    repo.git.add('.')
    repo.git.commit(m='Daily update {}'.format(date.today()))
    repo.git.push()
except Exception as e:
    print e
