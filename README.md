# Lab Projects / Demo
實驗室一些可以展示的專案與服務

https://demo.nlpnchu.org

## 增加新項目
請直接對 [/public/assets/yamls/project.yaml](https://github.com/NCHU-NLP-Lab/Lab-Projects/blob/main/public/assets/yamls/project.yaml) 進行修改與提交

提交檔案前請先進行[格式驗證](https://codebeautify.org/yaml-validator)

該檔案採用yaml格式，可以簡單參閱一下[語法規則](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html)

### 樣板
請特別注意`key: value`，冒號後面有一個半形空白。

圖片可放置在外網圖床或是[本repo中](https://github.com/NCHU-NLP-Lab/Lab-Projects/tree/main/public/assets/images)，連結格式：`/assets/images/圖檔名稱`
```yaml
- fullName: str
  shortName: str
  image: optional #如果沒有圖片請將此key刪除
  content: str
  tags: [tag_a, tag_b, tag_c]
  authors: [{name: str,link: str}] 
  links: [{name: str,style: str, href: str}]
  gitRepo: optional #格式：username/repo
```
範例
```yaml
- fullName: Nerual Distractor Generator
  shortName: BDG
  image: /assets/images/lab-logo.png
  context: 閱讀理解多選題干擾選項生成，給文章，問題和答案生成干擾選項
  tags: [Distractor, Text Generation]
  authors: [{name: Eric Lam, link: https://github.com/voidful}]
  links: [
    {name: Demo, style: btn-primary, href: https://github.com/voidful/BDG}
  ]
  gitRepo: voidful/BDG
```

## 開發/維護
基本上你不會需要自己編譯與部署，已經設定好github action，修改完畢後推送到repo的時候會自動執行

確定`secrets.ACCESS_TOKEN`有被正確設置在repo中即可
> https://github.com/peaceiris/actions-gh-pages

### Domain

這個專案架設在gh-pages,如果需要更換網址請重新設定
- package.json `homepage`
- public/CNAME

### 指令

第一次clone下來起先執行`npm install`
In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
