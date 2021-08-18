class Header{
    constructor(img, p){
        this.src = img;
        this.p = p;
    }
    render(id){
        let out = '';
        out += `
            <img src="${this.src}">
            <p>${this.p}</p>
        `
        document.querySelector(`#${id}`).innerHTML = out;
    }
}

let img1 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/65-woman-256.png";
let block1 = new Header(img1, 'Женщина в розовой кофте')
block1.render('block1')

let img2 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/26-woman-256.png";
let block2 = new Header(img2, 'Женщина в белой рубашке')
block2.render('block2')

let img3 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/40-Dealer-256.png";
let block3 = new Header(img3, 'Женщина- офисный работник')
block3.render('block3')

let img4 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/06-student-256.png";
let block4 = new Header(img4, 'Студент')
block4.render('block4')

let img5 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/16-Engineer-256.png";
let block5 = new Header(img5, 'Инженер')
block5.render('block5')

let img6 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/39-sportman-256.png";
let block6 = new Header(img6, 'Спортсмен')
block6.render('block6')

let img7 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/64-nurse-256.png";
let block7 = new Header(img7, 'Женщина доктор')
block7.render('block7')

let img8 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/42-Detective-256.png";
let block8 = new Header(img8, 'Ковбой')
block8.render('block8')

let img9 = "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/19-monk-256.png";
let block9 = new Header(img9, 'Монах')
block9.render('block9')
