import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device, DevicesService } from '../core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-device-page',
  templateUrl: './device.component.html'
})

export class DeviceComponent implements OnInit{
  
  devices: Device[] = {} as Device[];
  device: {slug: string};
  errors: Object = {};
  isSubmitting = false;
  
  constructor(
    
    private deviceService: DevicesService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastrManager
  ) { }

    ngOnInit() {
      //var array_devices = [];
      
      this.device = {
        slug: this.route.snapshot.params.slug
      };
    // Retreive the prefetched article
    this.route.data.subscribe(
      (data: { devices: Device[] }) => {
        this.devices = data.devices;
        console.log("YEEEE SMARTPHONE",this.device.slug);
        // Load smartphones
        this.deviceService.detail(this.device.slug)
      .subscribe(
      data => {
        console.log("res frontend smartphones:",data);
        this.devices = [data];
        
      },
      err => {
        console.log("Error smartphones",err);
        
      }
    );
      }
    );

    
  }
}

