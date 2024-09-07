import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {

  constructor() { }

  getImages() {
    return [
      {id: 1, title: 'Mario', url: 'https://sm.ign.com/t/ign_br/screenshot/default/super-mario-bros-filme_pcj8.960.jpg'},
      {id: 2, title: 'The Legend of Zelda', url: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1200/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58'},
      {id: 3, title: 'Solo Leveling', url: 'https://tm.ibxk.com.br///2024/01/22/22105959744066.jpg?ims=1280x605'},
      {id: 4, title: 'Kimetsu no Yaiba', url: 'https://www.agendartecultura.com.br/wp-content/uploads/2021/08/Demon-Slayer-divulga%C3%A7%C3%A3o-1024x576.png'},
      {id: 5, title: 'Jujutsu Kaisen', url: 'https://www.agendartecultura.com.br/wp-content/uploads/2021/08/Jujutsu-kaisen-divulga%C3%A7%C3%A3o-1024x576.jpg'},
      {id: 6, title: 'Black Clover', url: 'https://www.agendartecultura.com.br/wp-content/uploads/2021/08/Black-Clover.-divulga%C3%A7%C3%A3o-1.jpg'},
      {id: 7, title: 'Hunter x Hunter', url: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/476438OGE/anh-mo-ta.png'},
      {id: 8, title: 'One Piece', url: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg'},
      {id: 9, title: 'Boku no Hero Academy', url: 'https://s2-techtudo.glbimg.com/RfSO7fIX8BbBPQh8d-ksScoEyfI=/0x0:1440x750/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/2/6/j8rGRvTsyPA1F3CXNBpA/boku-no-hero-academia.webp'},
      {id: 10, title: 'Castlevania', url: 'https://www.einerd.com.br/wp-content/uploads/2017/07/Castlevania-Estreia-Hoje-890x466.jpg.webp'}

    ]
  }


}
