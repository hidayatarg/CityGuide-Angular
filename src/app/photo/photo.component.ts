import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
 // Authorize user can add
import { AuthService } from './../services/auth.service';
  // Getting Current city
import { ActivatedRoute } from '@angular/router'
import { Photo } from "./../models/photo";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"]
})

export class PhotoComponent implements OnInit {
  // Injection
  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute
  ) {}
  // photos of mode Photo is an empty arry
  // to prevenet the reference error
  photos: Photo[] = [];

  // According to Documentation
  uploader: FileUploader;
  hasBasedDropZoneOver = false;
  baseUrl= "http://localhost:51788/api/";

  currentMain:Photo;
  currentCity: any;


  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.currentCity=params["cityId"];
    });
    this.initializeUploader();
  }

  initializeUploader(){
      this.uploader=new FileUploader({
        // Upload address
        url:this.baseUrl + 'cities/'+this.currentCity+'/photos',
        authToken: 'Bearer '+localStorage.getItem('token'),
        isHTML5: true,
        allowedFileType:['image'],
        // Automatic upload
        autoUpload: false,
        removeAfterUpload: true,
        // max 10 mb
        maxFileSize:10*1024*1024,

      });
      this.uploader.onSuccessItem=(item, reponse, status, headers)=>{
        if(reponse){
          const res: Photo= JSON.parse(reponse);
          const photo= {
            // According to Photo Model
            id:res.id,
            url:res.url,
            dateAdded:res.dateAdded,
            description:res.description,
            isMain:res.isMain,
            cityId:res.cityId
          }
          this.photos.push(photo);
        }
      }
        
      }

}

