# greenbits
A sleek web development agency build on nextjs.

### Run below command in terminal/CMD to view the form data list
cd "d:/Greenbits/greenbits"
node -e "const Database=require('better-sqlite3'); const db=new Database('data/consultation.sqlite'); console.log(db.prepare('SELECT id, first_name, last_name, email, phone, website, message, newsletter_opt_in, created_at FROM consultation_submissions ORDER BY id DESC LIMIT 10').all());"
