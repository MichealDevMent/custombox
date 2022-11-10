import React , {Component} from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import "../component/globalconfig";
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';


class ThreeScene extends Component{
    
    componentDidMount(){
        
        this.raycaster = new THREE.Raycaster();
        this.pointer = new THREE.Vector2();
        this.threedeview = true
        this.basetexturestart = 0
        this.materialidstart = global.material
        this.materialrighnow = 1

        this.time = 0
        this.timetill = 5
        this.isSelect = false
        this.time = this.timetill
        this.Selected = "3dview";
        this.ObjectSelected = "";
        const state = { variant: 'midnight' };

        //scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xf0f0f0 );
        this.scene.castShadow = true

        //Render
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize(window.innerWidth , window.innerHeight-100)

        this.mount.appendChild(this.renderer.domElement)

        //camera
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight,1,100);

        // camera view 3D
        this.camera.position.y = 5.4;
        this.camera.position.x = 5.5;
        this.camera.position.z = -5;

        //geometry 
        var geometryatas = new THREE.BoxGeometry(2.9,0.05,2.9);
        var geometrybawah = new THREE.BoxGeometry(4.8,0.05,3);
        var geometrydepan = new THREE.BoxGeometry(2.9,2.2,0.05);
        var geometrybelakang = new THREE.BoxGeometry(2.9,2.2,0.05);
        var geometrykiri = new THREE.BoxGeometry(0.05,2.2,2.9);
        var geometrykanan = new THREE.BoxGeometry(0.05,2.2,2.9);


        //shadow geometry
        var shadow = new THREE.TextureLoader().load('../img/shadow.png');
        this.geometryshadow = new THREE.PlaneGeometry( 6, 6 );
        this.materialshadow = new THREE.MeshBasicMaterial( {color: 0xffffff , map : shadow,transparent:true} );
        this.planeshadow = new THREE.Mesh( this.geometryshadow, this.materialshadow );
        this.planeshadow.position.set(0,-0.120,0);
        this.planeshadow.rotation.x = 54.98;
        this.planeshadow.visible = true
        this.scene.add( this.planeshadow );
        

        //load texture
        var texturebase = [
         new THREE.TextureLoader().load(''),
         new THREE.TextureLoader().load(''),
        new THREE.TextureLoader().load('../img/abstract-photo.png'),
        new THREE.TextureLoader().load('../img/black-white-board.png'),
        new THREE.TextureLoader().load('../img/candy-black.png'),
        new THREE.TextureLoader().load('../img/candy-color.png'),
        new THREE.TextureLoader().load('../img/candy-white.png'),
        new THREE.TextureLoader().load('../img/flower-black.png'),
        new THREE.TextureLoader().load('../img/flower-color.png'),
        new THREE.TextureLoader().load('../img/flower-pot.png'),
        new THREE.TextureLoader().load('../img/grass-black.png'),
        new THREE.TextureLoader().load('../img/pineapple.png'),
        new THREE.TextureLoader().load('../img/trex-black.png'),
        new THREE.TextureLoader().load('../img/trex-color.png'),
        new THREE.TextureLoader().load('../img/trex-s.png'),
        new THREE.TextureLoader().load('../img/yin-yan.png'),
    ];
    

        var materialatas = new THREE.MeshStandardMaterial({
            color:0x5a67ff, transparent:true, opacity:0.0
        });
        var materialbawah = new THREE.MeshStandardMaterial({
            color:0x5a67ff, transparent:true, opacity:0.0
        });
        var materialdepan = new THREE.MeshStandardMaterial({
            color:0x5a67ff, transparent:true, opacity:0.0
        });
        var materialbelakang = new THREE.MeshStandardMaterial({
            color:0x5a67ff, transparent:true, opacity:0.0
        });
        var materialkiri = new THREE.MeshStandardMaterial({
            color:0x5a67ff, transparent:true, opacity:0.0
        });
        var materialkanan = new THREE.MeshStandardMaterial({
            color:0x5a67ff, transparent:true, opacity:0.0
        });

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x111111 );
        hemiLight.position.set( 10, 100, 1 );
        this.scene.add( hemiLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.position.set( 1, 4, -30 );
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 1;
        dirLight.shadow.camera.bottom = - 1;
        dirLight.shadow.camera.left = - 1;
        dirLight.shadow.camera.right = 1;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 1;
        dirLight.shadow.mapSize.set( 1024, 1024 );
        dirLight.name = "dirLight"
        this.scene.add( dirLight );

        window.addEventListener('resize', this.handleWindowsResize);
        window.addEventListener('pointermove', this.onPointerMove.bind(this) );
        window.addEventListener('keydown', this.onKeyDown.bind(this) );


        window.addEventListener('mouseup', (e)=>{
            this.pointer.x =(e.clientX/window.innerWidth)*2-1;
            this.pointer.y =(e.clientY/window.innerHeight)*-2+1;
           // console.log(this.pointer)
            this.raycaster.setFromCamera(this.pointer,this.camera);
            let found = this.raycaster.intersectObjects(this.scene.children);
       
             found.forEach((i)=>{
                // console.log(i.object.name);
                
                if(global.facebox==="3dview"){
                    global.doaddtext = false
                    global.addtexttype = 0
                    if(i.object.name !== ""){
                        // console.log(i.object.name);
                    }if(i.object.name === "Cube Sisi Atas"){
                        global.faceboxviewtoogle = "side-view active"
                        global.facebox ="Top"
                        global.faceboxviewtoogleposition = global.facebox+" Side"
                    }if(i.object.name === "Cube Sisi Bawah"){
                        global.faceboxviewtoogle = "side-view active"
                        global.facebox ="Bottom"
                        global.faceboxviewtoogleposition = global.facebox+" Side"
                    }if(i.object.name === "Cube Sisi Depan"){
                        global.faceboxviewtoogle = "side-view active"
                        global.facebox ="Front"
                        global.faceboxviewtoogleposition = global.facebox+" Side"
                    }if(i.object.name === "Cube Sisi Belakang"){
                        global.faceboxviewtoogle = "side-view active"
                        global.facebox ="Back"
                        global.faceboxviewtoogleposition = global.facebox+" Side"
                    }if(i.object.name === "Cube Sisi Kiri"){
                        global.faceboxviewtoogle = "side-view active"
                        global.facebox ="Left"
                        global.faceboxviewtoogleposition = global.facebox+" Side"
                    }if(i.object.name === "Cube Sisi Kanan"){
                        global.faceboxviewtoogle = "side-view active"
                        global.facebox ="Right"
                        global.faceboxviewtoogleposition = global.facebox+" Side"
                    }
                    
                }else if(global.facebox==="Top"){
                    
                    if(i.object.name === "text 1 template 1"){
                       
                    }
                    this.ObjectSelected ="text 1 template 1"
                }
                
             })

        });


        this.cubeatas =  new THREE.Mesh(geometryatas,materialatas);
        this.cubeatas.position.set(0,2.35,0);
        this.cubeatas.name = "Cube Sisi Atas"
        this.cubeatas.visible = false

        this.cubebawah =  new THREE.Mesh(geometrybawah,materialbawah);
        this.cubebawah.position.set(0,-0.09,0);
        this.cubebawah.name = "Cube Sisi Bawah"
        this.cubebawah.visible = false


        this.cubedepan =  new THREE.Mesh(geometrydepan,materialdepan);
        this.cubedepan.position.set(0,1.2,-1.485);
        this.cubedepan.name = "Cube Sisi Depan"
        this.cubedepan.visible = false


        this.cubebelakang =  new THREE.Mesh(geometrybelakang,materialbelakang);
        this.cubebelakang.position.set(0,1.2,1.485);
        this.cubebelakang.name = "Cube Sisi Belakang"
        this.cubebelakang.visible = false

        
        this.cubekiri =  new THREE.Mesh(geometrykiri,materialkiri);
        this.cubekiri.position.set(-1.5,1.2,0);
        this.cubekiri.name = "Cube Sisi Kiri"
        this.cubekiri.visible = false

                
        this.cubekanan =  new THREE.Mesh(geometrykanan,materialkanan);
        this.cubekanan.position.set(1.49,1.2,0);
        this.cubekanan.name = "Cube Sisi Kanan"
        this.cubekanan.visible = false



		this.scene.add( this.cubeatas );
		// this.scene.add( this.cubebawah );
		this.scene.add( this.cubedepan );
		this.scene.add( this.cubebelakang );
		this.scene.add( this.cubekiri );
		this.scene.add( this.cubekanan );

        const cardboard9x9x5 = new GLTFLoader();
        cardboard9x9x5.load( 'cardboard9x9x5.gltf', ( gltf )=> {

            //gltf.scene.children[0].scale.set(global.p,global.t,global.l);
            gltf.scene.children[0].name ="cardboard regular 9x9x5"
            
            this.scene.add( gltf.scene.children[0] );
            
            this.render();

        } );

        this.animation();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener( 'change',  this.render ); // use if there is no animation loop
        this.controls.minDistance = 9;
        this.controls.maxDistance = 20;
        this.controls.target.set( 0, 0, - 0.2 );
        this.controls.update();

        this.renderer.render(this.scene,this.camera);
        
    }


    onMouseDown(event){

        if (this.Selected === "Cube Sisi Atas"){
        // camera view atas
        this.camera.position.y = 3;
        this.camera.position.x = 0;
        this.camera.position.z = 0;
        this.threedeview = false

        }if(this.Selected === "Cube Sisi Bawah"){
            // camera view bawah
            this.camera.position.y = -3;
            this.camera.position.x = 0;
            this.camera.position.z = 0;
            this.threedeview = false

        }if(this.Selected === "Cube Sisi Depan"){
            // camera view depan
            this.camera.position.y = 0;
            this.camera.position.x = 0;
            this.camera.position.z = -3;
            this.threedeview = false

        }if(this.Selected === "Cube Sisi Belakang"){
            // camera view belakang
            this.camera.position.y = 0;
            this.camera.position.x = 0;
            this.camera.position.z = 3;
            this.threedeview = false

        }if(this.Selected === "Cube Sisi Kiri"){
            // camera view kiri
            this.camera.position.y = 0;
            this.camera.position.x = -3;
            this.camera.position.z = 0;
            this.threedeview = false

        }if(this.Selected === "Cube Sisi Kanan"){
            // camera view kanan
            this.camera.position.y = 0;
            this.camera.position.x = 3;
            this.camera.position.z = 0;
            this.threedeview = false

        }if(this.Selected === "Cube Sisi 3D"){
            // camera view 3D
            this.camera.position.y = 2.4;
            this.camera.position.x = 2.5;
            this.camera.position.z = -2;
            this.threedeview = true

        }
    }
    onKeyDown (e) {
        
        if(e.keyCode === 81){
           // camera view atas
           this.camera.position.y = 3;
           this.camera.position.x = 0;
           this.camera.position.z = 0;
           this.threedeview = false

        }if(e.keyCode === 87){
            // camera view bawah
            this.camera.position.y = -3;
            this.camera.position.x = 0;
            this.camera.position.z = 0;
            this.threedeview = false

        }if(e.keyCode === 69){
            // camera view depan
            this.camera.position.y = 0;
            this.camera.position.x = 0;
            this.camera.position.z = -3;
            this.threedeview = false

        }if(e.keyCode === 82){
            // camera view belakang
            this.camera.position.y = 0;
            this.camera.position.x = 0;
            this.camera.position.z = 3;
            this.threedeview = false

        }if(e.keyCode === 84){
            // camera view kiri
            this.camera.position.y = 0;
            this.camera.position.x = -3;
            this.camera.position.z = 0;
            this.threedeview = false

        }if(e.keyCode === 89){
            // camera view kanan
            this.camera.position.y = 0;
            this.camera.position.x = 3;
            this.camera.position.z = 0;
            this.threedeview = false

        }if(e.keyCode === 85){
            // camera view 3D
            this.camera.position.y = 2.4;
            this.camera.position.x = 2.5;
            this.camera.position.z = -2;
            this.threedeview = true

        }

       this.renderer.render(this.scene, this.camera); 

      }

    onPointerMove( event ) {
        // calculate pointer position in normalized device coordinates
        // (-1 to +1) for both components
        this.pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        this.pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        this.raycaster.setFromCamera( this.pointer, this.camera );
        const intersects = this.raycaster.intersectObjects( this.scene.children  );

        for ( let i = 0; i < intersects.length; i ++ ) {
            // console.log(intersects[i].object.name);
            if(intersects[i].object.name === "Cube Sisi Atas" && this.threedeview===true){
                this.cubeatas.material.opacity = 0.9;
                this.cubeatas.visible = true
                this.isSelect =true
                this.Selected = "Top"
              //  global.facebox = "Top"
            }

            if(intersects[i].object.name === "Cube Sisi Bawah" && this.threedeview===true){
                this.cubebawah.material.opacity = 0.9;
                this.cubebawah.visible = true
                this.isSelect =true
                this.Selected = "Bottom"
             //   global.facebox = "Bottom"

            }

             if(intersects[i].object.name === "Cube Sisi Depan" && this.threedeview===true){
                this.cubedepan.visible = true
                this.cubedepan.material.opacity = 0.9;
                this.isSelect =true
                this.Selected = "Front"

              //  global.facebox = "Front"

            }

             if(intersects[i].object.name === "Cube Sisi Belakang" && this.threedeview===true){
                this.cubebelakang.material.opacity = 0.9;
                this.cubebelakang.visible = true
                this.isSelect =true
                this.Selected = "Back"

              //  global.facebox = "Back"

            }

             if(intersects[i].object.name === "Cube Sisi Kiri" && this.threedeview===true){
                this.cubekiri.material.opacity = 0.9;
                this.cubekiri.visible = true
                this.isSelect =true
                this.Selected = "Left"

              //  global.facebox = "Left"

            }

             if(intersects[i].object.name === "Cube Sisi Kanan" && this.threedeview===true){
                this.cubekanan.material.opacity = 0.9;
                this.cubekanan.visible = true
                this.isSelect =true
                this.Selected = "Right"

             //   global.facebox = "Right"

            }
        }
        this.renderer.render( this.scene, this.camera );
			
    }

    animation =() => {

        // add shape
        let objectdrag,dControl;
        if (global.doaddshape === true && global.facebox === "Top") {
            for(var i= 1;i<=23;i++){
                if(global.addshapeno ===  i){
                    var shape1 = new THREE.TextureLoader().load(global.addshapedir);
                    this.geometryshape1 = new THREE.PlaneGeometry( global.shapesize, global.shapesize );
                    this.materialshape1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : shape1,transparent:true, side: THREE.DoubleSide} );
                    this.planeshape1 = new THREE.Mesh( this.geometryshape1, this.materialshape1 );
                    this.planeshape1.position.set(0,2.39,0);
                    this.planeshape1.rotation.x = 54.98;
                    this.planeshape1.rotation.z = 54.98;
                    this.planeshape1.name = "shape"+global.listshapeurut
                    this.scene.add( this.planeshape1 );
                    global.doaddshape = false

                    objectdrag = [this.planeshape1]

                    dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                    dControl.activate();
                }

            }
 
        }
        if (global.doaddshape === true && global.facebox === "Front") {
            for(var i= 1;i<=23;i++){
                if(global.addshapeno ===  i){
                    var shape1 = new THREE.TextureLoader().load(global.addshapedir);
                    this.geometryshape1 = new THREE.PlaneGeometry( global.shapesize, global.shapesize  );
                    this.materialshape1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : shape1,transparent:true, side: THREE.DoubleSide} );
                    this.planeshape1 = new THREE.Mesh( this.geometryshape1, this.materialshape1 );
                    this.planeshape1.position.set(0,1,-1.53);
                    this.planeshape1.rotation.y = 15.78;
                    // this.planeshape1.rotation.z = 54.98;
                    this.planeshape1.name = "shape"+global.listshapeurut
                    this.scene.add( this.planeshape1 );
                    global.doaddshape = false

                    let objectdrag = [this.planeshape1]

                    this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                    this.dControl.activate();
                }

            }
 
        }
        if (global.doaddshape === true && global.facebox === "Back") {
            for(var i= 1;i<=23;i++){
                if(global.addshapeno ===  i){
                    var shape1 = new THREE.TextureLoader().load(global.addshapedir);
                    this.geometryshape1 = new THREE.PlaneGeometry( global.shapesize, global.shapesize  );
                    this.materialshape1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : shape1,transparent:true, side: THREE.DoubleSide} );
                    this.planeshape1 = new THREE.Mesh( this.geometryshape1, this.materialshape1 );
                    this.planeshape1.position.set(0,1,1.53);
                    this.planeshape1.rotation.y = 15.78;
                    // this.planeshape1.rotation.z = 54.98;
                    this.planeshape1.name = "shape"+global.listshapeurut
                    this.scene.add( this.planeshape1 );
                    global.doaddshape = false

                    let objectdrag = [this.planeshape1]

                    this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                    this.dControl.activate();
                }

            }
 
        }
        if (global.doaddshape === true && global.facebox === "Right") {
            for(var i= 1;i<=23;i++){
                if(global.addshapeno ===  i){
                    var shape1 = new THREE.TextureLoader().load(global.addshapedir);
                    this.geometryshape1 = new THREE.PlaneGeometry( global.shapesize, global.shapesize  );
                    this.materialshape1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : shape1,transparent:true, side: THREE.DoubleSide} );
                    this.planeshape1 = new THREE.Mesh( this.geometryshape1, this.materialshape1 );
                    this.planeshape1.position.set(1.53,1,0);
                    this.planeshape1.rotation.y = 54.98;
                    // this.planeshape1.rotation.z = 54.98;
                    this.planeshape1.name = "shape"+global.listshapeurut
                    this.scene.add( this.planeshape1 );
                    global.doaddshape = false

                    let objectdrag = [this.planeshape1]

                    this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                    this.dControl.activate();
                }

            }
 
        }
        if (global.doaddshape === true && global.facebox === "Left") {
            for(var i= 1;i<=23;i++){
                if(global.addshapeno ===  i){
                    var shape1 = new THREE.TextureLoader().load(global.addshapedir);
                    this.geometryshape1 = new THREE.PlaneGeometry( global.shapesize, global.shapesize  );
                    this.materialshape1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : shape1,transparent:true, side: THREE.DoubleSide} );
                    this.planeshape1 = new THREE.Mesh( this.geometryshape1, this.materialshape1 );
                    this.planeshape1.position.set(-1.53,1,0);
                    this.planeshape1.rotation.y = 54.98;
                    // this.planeshape1.rotation.z = 54.98;
                    this.planeshape1.name = "shape"+global.listshapeurut
                    this.scene.add( this.planeshape1 );
                    global.doaddshape = false

                    let objectdrag = [this.planeshape1]

                    this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                    this.dControl.activate();
                }

            }
 
        }
        // end add shape

        //remove shape
        if(global.isremoveshap === true){
            var sel = this.scene.getObjectByName(global.removeshapename)
            this.scene.remove(sel)
            global.isremoveshap = false
        }
        //end remove shape

        // bagian add logo
        if(global.doaddlogo === true && global.facebox === "Top"){
            var textureLoader = new THREE.TextureLoader();
            textureLoader.crossOrigin = '';
            var image1 = textureLoader.load(global.urlserver+global.imageafterupload);
            this.geoLogo = new THREE.PlaneGeometry( 0.5, 0.5 );
            this.matLogo = new THREE.MeshBasicMaterial( {color: 0xffffff , map : image1, side: THREE.DoubleSide,transparent:true} );
            this.logo = new THREE.Mesh( this.geoLogo, this.matLogo );
            this.logo.position.set(0,2.39,0);
            this.logo.rotation.x = 54.98;
            // this.logo.rotation.z = 15.98;
            this.logo.name = "logoTop"
            this.scene.add( this.logo );
            global.doaddlogo = false

            
            let objectdrag = [this.logo]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddlogo === true && global.facebox === "Front"){
            var textureLoader = new THREE.TextureLoader();
            textureLoader.crossOrigin = '';
            var image1 = textureLoader.load(global.urlserver+global.imageafterupload);
            this.geoLogo = new THREE.PlaneGeometry( 0.5, 0.5 );
            this.matLogo = new THREE.MeshBasicMaterial( {color: 0xffffff , map : image1, side: THREE.DoubleSide,transparent:true} );
            this.logo = new THREE.Mesh( this.geoLogo, this.matLogo );
            this.logo.position.set(0,1,-1.53);
            this.logo.rotation.y = 15.78;
            this.logo.name = "logoFront"
            this.scene.add( this.logo );
            global.doaddlogo = false

            let objectdrag = [this.logo]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddlogo === true && global.facebox === "Back"){
            var textureLoader = new THREE.TextureLoader();
            textureLoader.crossOrigin = '';
            var image1 = textureLoader.load(global.urlserver+global.imageafterupload);
            this.geoLogo = new THREE.PlaneGeometry( 0.5, 0.5 );
            this.matLogo = new THREE.MeshBasicMaterial( {color: 0xffffff , map : image1, side: THREE.DoubleSide,transparent:true} );
            this.logo = new THREE.Mesh( this.geoLogo, this.matLogo );
            this.logo.position.set(0,1,1.53);
            this.logo.name = "logoBack"
            this.scene.add( this.logo );
            global.doaddlogo = false

            let objectdrag = [this.logo]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddlogo === true && global.facebox === "Right"){
            var textureLoader = new THREE.TextureLoader();
            textureLoader.crossOrigin = '';
            var image1 = textureLoader.load(global.urlserver+global.imageafterupload);
            this.geoLogo = new THREE.PlaneGeometry( 0.5, 0.5 );
            this.matLogo = new THREE.MeshBasicMaterial( {color: 0xffffff , map : image1, side: THREE.DoubleSide,transparent:true} );
            this.logo = new THREE.Mesh( this.geoLogo, this.matLogo );
            this.logo.position.set(1.55,1,0.8)
            this.logo.rotation.y=1.6
            this.logo.name = "logoRight"
            this.scene.add( this.logo );
            global.doaddlogo = false

            let objectdrag = [this.logo]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddlogo === true && global.facebox === "Left"){
            var textureLoader = new THREE.TextureLoader();
            textureLoader.crossOrigin = '';
            var image1 = textureLoader.load(global.urlserver+global.imageafterupload);
            this.geoLogo = new THREE.PlaneGeometry( 0.5, 0.5 );
            this.matLogo = new THREE.MeshBasicMaterial( {color: 0xffffff , map : image1, side: THREE.DoubleSide,transparent:true} );
            this.logo = new THREE.Mesh( this.geoLogo, this.matLogo );
            this.logo.position.set(-1.52,1,-0.6)
            this.logo.rotation.y=-1.6
            this.logo.name = "logoLeft"
            this.scene.add( this.logo );
            global.doaddlogo = false

            let objectdrag = [this.logo]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        // end add logo

        //add stamp
        if(global.doaddstamp === true && global.facebox === "Top" && global.addstampno === 1){
            var stamp1 = new THREE.TextureLoader().load('../img/approved-stamp.png');
            this.geometrystamp1 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp1,transparent:true, side: THREE.DoubleSide} );
            this.planestamp1 = new THREE.Mesh( this.geometrystamp1, this.materialstamp1 );
            this.planestamp1.position.set(0,2.39,0);
            this.planestamp1.rotation.x = 54.98;
            this.planestamp1.rotation.z = 15.98;
            this.planestamp1.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp1 );

            global.doaddstamp = false

            let objectdrag = [this.planestamp1]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddstamp === true && global.facebox === "Top" && global.addstampno === 2){
            var stamp2 = new THREE.TextureLoader().load('../img/circular-label-with-certified-stamp.png');
            this.geometrystamp2 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp2 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp2,transparent:true, side: THREE.DoubleSide} );
            this.planestamp2 = new THREE.Mesh( this.geometrystamp2, this.materialstamp2 );
            this.planestamp2.position.set(0,2.39,0);
            this.planestamp2.rotation.x = 54.98;
            this.planestamp2.rotation.z = 15.98;
            this.planestamp2.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp2 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp2]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddstamp === true && global.facebox === "Top" && global.addstampno === 3){
            var stamp3 = new THREE.TextureLoader().load('../img/stample.png');
            this.geometrystamp3 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp3 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp3,transparent:true, side: THREE.DoubleSide} );
            this.planestamp3 = new THREE.Mesh( this.geometrystamp3, this.materialstamp3 );
            this.planestamp3.position.set(0,2.39,0);
            this.planestamp3.rotation.x = 54.98;
            this.planestamp3.rotation.z = 15.98;
            this.planestamp3.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp3 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp3]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }

        if(global.doaddstamp === true && global.facebox === "Front" && global.addstampno === 1){
            var stamp1 = new THREE.TextureLoader().load('../img/approved-stamp.png');
            this.geometrystamp1 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp1,transparent:true, side: THREE.DoubleSide} );
            this.planestamp1 = new THREE.Mesh( this.geometrystamp1, this.materialstamp1 );
            this.planestamp1.position.set(0,1,-1.53);
            this.planestamp1.rotation.y = 15.78;
            // this.planestamp1.rotation.z = 15.98;
            this.planestamp1.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp1 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp1]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddstamp === true && global.facebox === "Front" && global.addstampno === 2){
            var stamp2 = new THREE.TextureLoader().load('../img/circular-label-with-certified-stamp.png');
            this.geometrystamp2 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp2 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp2,transparent:true, side: THREE.DoubleSide} );
            this.planestamp2 = new THREE.Mesh( this.geometrystamp2, this.materialstamp2 );
            this.planestamp2.position.set(0,1,-1.53);
            this.planestamp2.rotation.y = 15.78;
            this.planestamp2.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp2 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp2]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddstamp === true && global.facebox === "Front" && global.addstampno === 3){
            var stamp3 = new THREE.TextureLoader().load('../img/stample.png');
            this.geometrystamp3 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp3 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp3,transparent:true, side: THREE.DoubleSide} );
            this.planestamp3 = new THREE.Mesh( this.geometrystamp3, this.materialstamp3 );
            this.planestamp3.position.set(0,1,-1.53);
            this.planestamp3.rotation.y = 15.78;
            this.planestamp3.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp3 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp3]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }

        if(global.doaddstamp === true && global.facebox === "Back" && global.addstampno === 1){
            var stamp1 = new THREE.TextureLoader().load('../img/approved-stamp.png');
            this.geometrystamp1 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp1,transparent:true, side: THREE.DoubleSide} );
            this.planestamp1 = new THREE.Mesh( this.geometrystamp1, this.materialstamp1 );
            this.planestamp1.position.set(0,1,1.53);
            this.planestamp1.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp1 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp1]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddstamp === true && global.facebox === "Back" && global.addstampno === 2){
            var stamp2 = new THREE.TextureLoader().load('../img/circular-label-with-certified-stamp.png');
            this.geometrystamp2 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp2 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp2,transparent:true, side: THREE.DoubleSide} );
            this.planestamp2 = new THREE.Mesh( this.geometrystamp2, this.materialstamp2 );
            this.planestamp2.position.set(0,1,1.53);
            this.planestamp2.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp2 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp2]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        if(global.doaddstamp === true && global.facebox === "Back" && global.addstampno === 3){
            var stamp3 = new THREE.TextureLoader().load('../img/stample.png');
            this.geometrystamp3 = new THREE.PlaneGeometry( global.stampsize, global.stampsize );
            this.materialstamp3 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : stamp3,transparent:true, side: THREE.DoubleSide} );
            this.planestamp3 = new THREE.Mesh( this.geometrystamp3, this.materialstamp3 );
            this.planestamp3.position.set(0,1,1.53);
            this.planestamp3.name = "stamp"+global.liststampurut
            this.scene.add( this.planestamp3 );

            global.doaddstamp = false
            let objectdrag = [this.planestamp3]

            this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
            this.dControl.activate();
        }
        //end add stap

        //remove stamp
        if(global.isremovestamp === true){
            var selSub = this.scene.getObjectByName(global.removestampname)
            this.scene.remove(selSub)
            global.isremovestamp = false
        }
        //end remove stamp

        // bagian add text
        //top
        if(global.doaddtext === true && global.facebox === "Top" && global.addtexttype === 1){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont,
                });


                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,2.39,global.vtext)
                tmesh.rotation.x=54.98
                tmesh.rotation.z=-40.83
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });

            global.doaddtext = false
            global.addtexttype = 0
            // console.log(global.textobjectnameurut + " " +global.tulisanText);

        }

        if(global.doaddtext === true && global.facebox === "Top" && global.addtexttype === 2){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bahnschrift_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,2.39,global.vtext)
                tmesh.rotation.x=54.98
                tmesh.rotation.z=-40.83
                tmesh.name = "addtext"+global.textobjectnameurut;

                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,2.39,global.vtextSub)
                tmesh2.rotation.x=54.98
                tmesh2.rotation.z=-40.83
                tmesh2.name = "addtextsub"+global.textobjectnameurutSub;

                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();

                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Top" && global.addtexttype === 3){
            let selectfont;
            let tulisan = global.tulisanText;
            global.textobjectnameurut++;
            let loaders = new FontLoader().load('./Bodoni MT Poster Compressed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htextSub,2.39,global.vtextSub)
                tmesh.rotation.x=54.98
                tmesh.rotation.z=-40.83
                tmesh.name = "addtext"+global.textobjectnameurut;
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();

                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            global.textobjectnameurut++;
            let loaders2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,2.39,global.vtextSub)
                tmesh2.rotation.x=54.98
                tmesh2.rotation.z=-40.83
                tmesh2.name = "addtextsub"+global.textobjectnameurut;

                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Top" && global.addtexttype === 4){
            let selectfont;
            let tulisan = global.tulisanText;
            global.textobjectnameurut++;
            let loaders = new FontLoader().load('./Agency FB_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htextSub,2.39,global.vtextSub)
                tmesh.rotation.x=54.98
                tmesh.rotation.z=-40.83
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            global.textobjectnameurut++;
            let loaders2 = new FontLoader().load('./Bradley Hand ITC_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,2.39,global.vtextSub)
                tmesh2.rotation.x=54.98
                tmesh2.rotation.z=-40.83
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Top" && global.addtexttype === 5){
            let selectfont;
            let tulisan = global.tulisanText;
            global.textobjectnameurut++;
            let loaders = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htextSub,2.39,global.vtextSub)
                tmesh.rotation.x=54.98
                tmesh.rotation.z=-40.83
                tmesh.name = "addtext"+global.textobjectnameurut;
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            global.textobjectnameurut++;
            let loaders2 = new FontLoader().load('./Brush Script MT_Italic.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,2.39,global.vtextSub)
                tmesh2.rotation.x=54.98
                tmesh2.rotation.z=-40.83
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }

        //Front
        if(global.doaddtext === true && global.facebox === "Front" && global.addtexttype === 1){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htextSub,global.vtextSub,-1.50)
                tmesh.rotation.y=3.12
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Front" && global.addtexttype === 2){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bahnschrift_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,-1.50)
                tmesh.rotation.y=3.11
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,-1.50)
                tmesh2.rotation.y=3.11
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Front" && global.addtexttype === 3){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bodoni MT Poster Compressed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,-1.55)
                tmesh.rotation.y=3.11
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,-1.50)
                tmesh2.rotation.y=3.11
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }


        if(global.doaddtext === true && global.facebox === "Front" && global.addtexttype === 4){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Agency FB_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,-1.50)
                tmesh.rotation.y=3.11
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bradley Hand ITC_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,-1.50)
                tmesh2.rotation.y=3.11
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Front" && global.addtexttype === 5){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,-1.50)
                tmesh.rotation.y=3.11
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Brush Script MT_Italic.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,-1.50)
                tmesh2.rotation.y=3.11
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
           
            global.doaddtext = false
            global.addtexttype = 0

        }
        //back
        if(global.doaddtext === true && global.facebox === "Back" && global.addtexttype === 1){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htextSub,global.vtextSub,1.58)
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Back" && global.addtexttype === 2){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bahnschrift_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,1.58)
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,1.58)
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2];
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Back" && global.addtexttype === 3){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bodoni MT Poster Compressed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,1.58)
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,1.58)
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }


        if(global.doaddtext === true && global.facebox === "Back" && global.addtexttype === 4){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Agency FB_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,1.58)
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bradley Hand ITC_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,1.58)
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Back" && global.addtexttype === 5){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(global.htext,global.vtext,1.58)
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Brush Script MT_Italic.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(global.htextSub,global.vtextSub,1.58)
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

         //Right
         if(global.doaddtext === true && global.facebox === "Right" && global.addtexttype === 1){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(1.55,global.vtext,global.htext)
                tmesh.rotation.y=1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Right" && global.addtexttype === 2){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bahnschrift_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(1.55,global.vtext,global.htext)
                tmesh.rotation.y=1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(1.55,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Right" && global.addtexttype === 3){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bodoni MT Poster Compressed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(1.55,global.vtext,global.htext)
                tmesh.rotation.y=1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(1.55,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }


        if(global.doaddtext === true && global.facebox === "Right" && global.addtexttype === 4){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Agency FB_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(1.55,global.vtext,global.htext)
                tmesh.rotation.y=1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bradley Hand ITC_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(1.55,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Right" && global.addtexttype === 5){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(1.55,global.vtext,global.htext)
                tmesh.rotation.y=1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Brush Script MT_Italic.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(1.55,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

         //Left
         if(global.doaddtext === true && global.facebox === "Left" && global.addtexttype === 1){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(-1.52,global.vtextSub,global.htextSub)
                tmesh.rotation.y=-1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Left" && global.addtexttype === 2){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bahnschrift_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(-1.52,global.vtext,global.htext)
                tmesh.rotation.y=-1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(-1.52,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=-1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Left" && global.addtexttype === 3){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bodoni MT Poster Compressed_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(-1.52,global.vtext,global.htext)
                tmesh.rotation.y=-1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(-1.52,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=-1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }


        if(global.doaddtext === true && global.facebox === "Left" && global.addtexttype === 4){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Agency FB_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(-1.52,global.vtext,global.htext)
                tmesh.rotation.y=-1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Bradley Hand ITC_Regular.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSub,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(-1.52,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=-1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        if(global.doaddtext === true && global.facebox === "Left" && global.addtexttype === 5){
            let selectfont;
            let tulisan = global.tulisanText;
            let loaders = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(tulisan,{
                    size: global.sizeText,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                tmesh.position.set(-1.52,global.vtext,global.htext)
                tmesh.rotation.y=-1.6
                tmesh.name = "addtext"+global.textobjectnameurut
                let objectdrag = [tmesh]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh)
            });
            let selectfont2;
            let tulisan2 = global.tulisanTextSub;
            let loaders2 = new FontLoader().load('./Brush Script MT_Italic.json',(e)=>{
                selectfont2 = e
                let tGeo2 = new TextGeometry(tulisan2,{
                    size: global.sizeTextSubb ,
                    height :0.001,
                    font :selectfont2
                });
                let tmat2 = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh2 = new THREE.Mesh(tGeo2,tmat2);
                tmesh2.position.set(-1.52,global.vtextSub,global.htextSub)
                tmesh2.rotation.y=-1.6
                tmesh2.name = "addtextsub"+global.textobjectnameurut
                let objectdrag = [tmesh2]
                this.dControl = new DragControls(objectdrag ,this.camera, this.renderer.domElement);
                this.dControl.activate();
                this.scene.add(tmesh2)
            });
        
            global.doaddtext = false
            global.addtexttype = 0

        }

        // end bagian add text

        //remove text
        if(global.isremovetext === true){
            // console.log(global.removetextname+" "+global.removetextnamesub);
            var sel = this.scene.getObjectByName(global.removetextname)
            this.scene.remove(sel)
            var selSub = this.scene.getObjectByName(global.removetextnamesub)
            this.scene.remove(selSub)
            global.isremovetext = false

            
        }

        //end remove text

        // add material type

        if (global.material===1){
            var sel = this.scene.getObjectByName('cardboard regular 9x9x5')
            this.scene.remove(sel)
            var sel2 = this.scene.getObjectByName('cardboard Premium 9x9x5')
            this.scene.remove(sel2)
            const loader = new GLTFLoader();
            loader.load( 'cardboard9x9x5.gltf', ( gltf )=> {

                //gltf.scene.children[0].scale.set(global.p,global.t,global.l);
                gltf.scene.children[0].name ="cardboard regular 9x9x5"
                
                this.scene.add( gltf.scene.children[0] );
                
                this.render();
        
            } );
            global.material =0
            this.materialrighnow = 1

        }

        if (global.material===2){
            var sel = this.scene.getObjectByName('cardboard regular 9x9x5')
            this.scene.remove(sel)
            var sel2 = this.scene.getObjectByName('cardboard Premium 9x9x5')
            this.scene.remove(sel2)
            const loader = new GLTFLoader();
            loader.load( 'cardboard-premium9x9x5.gltf', ( gltf )=> {

                //gltf.scene.children[0].scale.set(global.p,global.t,global.l);
                gltf.scene.children[0].name ="cardboard Premium 9x9x5"
                
                this.scene.add( gltf.scene.children[0] );
                
                this.render();
        
            } );
            global.material =0
            this.materialrighnow = 2

        }

        // end add material type

        // change size box
        
        
        if (global.changesize===true){
            if(this.materialrighnow===1){
                var sel = this.scene.getObjectByName('cardboard regular')
                this.scene.remove(sel)
                var sel2 = this.scene.getObjectByName('cardboard Premium')
                this.scene.remove(sel2)
                const loader = new GLTFLoader();
                loader.load( 'cardboard9x9x5.gltf', ( gltf )=> {
        
                    //gltf.scene.children[0].scale.set(global.p,global.t,global.l);
                    gltf.scene.children[0].name ="cardboard regular 9x9x5"
                    
                    this.scene.add( gltf.scene.children[0] );
                    
                    this.render();
            
                } );
            }
            if(this.materialrighnow===2){
                var sel = this.scene.getObjectByName('cardboard regular')
                this.scene.remove(sel)
                var sel2 = this.scene.getObjectByName('cardboard Premium')
                this.scene.remove(sel2)
                const loader = new GLTFLoader();
                loader.load( 'cardboard-premium9x9x5.gltf', ( gltf )=> {
        
                    //gltf.scene.children[0].scale.set(global.p,global.t,global.l);
                    gltf.scene.children[0].name ="cardboard Premium 9x9x5"
                    
                    this.scene.add( gltf.scene.children[0] );
                    
                    this.render();
            
                } );
            }

            global.changesize= false
        }

        // end chnage size box

        // add pattern
        if(global.changepattern === true){
            if(global.pattern===1){
            
            }

            if(global.pattern===2){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern1-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern1-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===3){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern2-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern2-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===4){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern3-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern3-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===5){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern4-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern4-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===6){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern5-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern5-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===7){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern6-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern6-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===8){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern7-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern7-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===9){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern8-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern8-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===10){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern9-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern9-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===11){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern10-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern10-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===12){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern11-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern11-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===13){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern12-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern12-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===14){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern13-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern13-9x9x5')
                this.scene.remove(removeobject)
            }

            if(global.pattern===15){
                const pattern1 = new GLTFLoader();
                const patternname = 'pattern14-9x9x5';
                pattern1.load( patternname+'.gltf', ( gltf )=> {
                    gltf.scene.children[0].name = patternname
                    this.scene.add( gltf.scene.children[0] );
                    this.render();
                } );
            }
            else{
                var removeobject = this.scene.getObjectByName('pattern14-9x9x5')
                this.scene.remove(removeobject)
            }
        global.changepattern = false
        }
        //end add pattern

        //add template
        if(global.changetemplate ===  true){
            if(global.templatenumber===1){
                // posisi text di atas
                let selectfont;
                let tulisan1 = "Hallo.c";
                let tulisan2 = "Facebook.com";
                let tulisan3 = "MyStore.com";
                let tulisan4 = "Open Me";
                let tulisan5 = "@Company";
                let text1template1 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan1,{
                        size: 0.5,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,2.39,0)
                    tmesh.rotation.x=54.98
                    tmesh.rotation.z=-40.83
                    tmesh.name = "text 1 template 1"
                    this.scene.add(tmesh)
                });

                let text2template1 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan2,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,1,-1.499)
                    tmesh.rotation.y=3.11
                    tmesh.name = "text 2 template 1"
                    this.scene.add(tmesh)
                });
            
                let text3template1 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan3,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-0.6,1,1.499)
                    tmesh.name = "text 3 template 1"
                    this.scene.add(tmesh)
                });

                let text4template1 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan4,{
                        size: 0.5,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(1.55,1,0.8)
                    tmesh.rotation.y=1.6
                    tmesh.name = "text 4 template 1"
                    this.scene.add(tmesh)
                });

                let text5template1 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan5,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-1.52,1,-0.5)
                    tmesh.rotation.y=-1.6
                    tmesh.name = "text 5 template 1"
                    this.scene.add(tmesh)
                });


            }else{
                var template1text1 = this.scene.getObjectByName('text 1 template 1')
                this.scene.remove(template1text1)
                var template1text2 = this.scene.getObjectByName('text 2 template 1')
                this.scene.remove(template1text2)
                var template1text3 = this.scene.getObjectByName('text 3 template 1')
                this.scene.remove(template1text3)
                var template1text4 = this.scene.getObjectByName('text 4 template 1')
                this.scene.remove(template1text4)
                var template1text5 = this.scene.getObjectByName('text 5 template 1')
                this.scene.remove(template1text5)
            }                
    
            if(global.templatenumber===2){
                // posisi text di atas
                let selectfont;
                let tulisan1 = "Make Your Happy";
                let tulisan2 = "Facebook.com";
                let tulisan3 = "@Company";
                let tulisan4 = "Open Me";
                let tulisan5 = "MyStore.com";
                let text1template2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan1,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,2.39,0)
                    tmesh.rotation.x=54.98
                    tmesh.rotation.z=-40.83
                    tmesh.name = "text 1 template 2"
                    this.scene.add(tmesh)
                });

                let text2template2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan2,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,1,-1.499)
                    tmesh.rotation.y=3.11
                    tmesh.name = "text 2 template 2"
                    this.scene.add(tmesh)
                });
            
                let text3template2 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan3,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-0.6,1,1.499)
                    tmesh.name = "text 3 template 2"
                    this.scene.add(tmesh)
                });

                let text4template2 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan4,{
                        size: 0.3,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(1.55,1,0.8)
                    tmesh.rotation.y=1.6
                    tmesh.name = "text 4 template 2"
                    this.scene.add(tmesh)
                });

                let text5template2 = new FontLoader().load('./Kunstler Script_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan5,{
                        size: 0.4,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-1.52,1,-0.9)
                    tmesh.rotation.y=-1.6
                    tmesh.name = "text 5 template 2"
                    this.scene.add(tmesh)
                });

                var facebookicon = new THREE.TextureLoader().load('../img/FacebookIconBlack.png');
                this.geometryfacebookicon = new THREE.PlaneGeometry( 0.31, 0.31 );
                this.materialfacebookicon = new THREE.MeshBasicMaterial( {color: 0xffffff , map : facebookicon,transparent:true, side: THREE.DoubleSide} );
                this.planefacebookicon = new THREE.Mesh( this.geometryfacebookicon, this.materialfacebookicon );
                this.planefacebookicon.position.set(0,1.5,-1.53);
                this.planefacebookicon.rotation.y = 53.5;
                this.planefacebookicon.visible = true
                this.planefacebookicon.name = 'facebook icon template 2'
                this.scene.add( this.planefacebookicon );

                var instagramicon = new THREE.TextureLoader().load('../img/black-instagram.png');
                this.geometryinstagramicon = new THREE.PlaneGeometry( 0.31, 0.31 );
                this.materialinstagramicon = new THREE.MeshBasicMaterial( {color: 0xffffff , map : instagramicon,transparent:true, side: THREE.DoubleSide} );
                this.planeinstagramicon = new THREE.Mesh( this.geometryinstagramicon, this.materialinstagramicon );
                this.planeinstagramicon.position.set(0,1.5,1.53);
                this.planeinstagramicon.rotation.y = 53.5;
                this.planeinstagramicon.visible = true
                this.planeinstagramicon.name = 'instagram icon template 2'
                this.scene.add( this.planeinstagramicon );


            }else{
                var template2text1 = this.scene.getObjectByName('text 1 template 2')
                this.scene.remove(template2text1)
                var template2text2 = this.scene.getObjectByName('text 2 template 2')
                this.scene.remove(template2text2)
                var template2text3 = this.scene.getObjectByName('text 3 template 2')
                this.scene.remove(template2text3)
                var template2text4 = this.scene.getObjectByName('text 4 template 2')
                this.scene.remove(template2text4)
                var template2text5 = this.scene.getObjectByName('text 5 template 2')
                this.scene.remove(template2text5)
                var template2facebookicon = this.scene.getObjectByName('facebook icon template 2')
                this.scene.remove(template2facebookicon)
                var template2instagramicon = this.scene.getObjectByName('instagram icon template 2')
                this.scene.remove(template2instagramicon)
            }   
    
            if(global.templatenumber===3){
                // posisi text di atas
                let selectfont;
                let tulisan1 = "Friendly Box";
                let tulisan2 = "www.mystore.com";
                let tulisan3 = "www.mystore.com";
                let tulisan4 = "Open Me";
                let tulisan5 = "www.mystore.com";
                let text1template3 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan1,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,2.39,0)
                    tmesh.rotation.x=54.98
                    tmesh.rotation.z=-40.83
                    tmesh.name = "text 1 template 3"
                    this.scene.add(tmesh)
                });

                let text2template3 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan2,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,1,-1.499)
                    tmesh.rotation.y=3.11
                    tmesh.name = "text 2 template 3"
                    this.scene.add(tmesh)
                });
            
                let text3template3 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan3,{
                        size: 0.1,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-0.6,1,1.499)
                    tmesh.name = "text 3 template 3"
                    this.scene.add(tmesh)
                });

                let text4template3 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan4,{
                        size: 0.3,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(1.55,1,0.4)
                    tmesh.rotation.y=1.6
                    tmesh.name = "text 4 template 3"
                    this.scene.add(tmesh)
                });

                let text5template3 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan5,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-1.52,1,-0.8)
                    tmesh.rotation.y=-1.6
                    tmesh.name = "text 5 template 3"
                    this.scene.add(tmesh)
                });

                var facebookicon = new THREE.TextureLoader().load('../img/FacebookIconBlack.png');
                this.geometryfacebookicon = new THREE.PlaneGeometry( 0.31, 0.31 );
                this.materialfacebookicon = new THREE.MeshBasicMaterial( {color: 0xffffff , map : facebookicon,transparent:true, side: THREE.DoubleSide} );
                this.planefacebookicon = new THREE.Mesh( this.geometryfacebookicon, this.materialfacebookicon );
                this.planefacebookicon.position.set(0,1.5,-1.53);
                this.planefacebookicon.rotation.y = 53.5;
                this.planefacebookicon.visible = true
                this.planefacebookicon.name = 'facebook icon template 3'
                this.scene.add( this.planefacebookicon );

                var instagramicon = new THREE.TextureLoader().load('../img/black-instagram.png');
                this.geometryinstagramicon = new THREE.PlaneGeometry( 0.31, 0.31 );
                this.materialinstagramicon = new THREE.MeshBasicMaterial( {color: 0xffffff , map : instagramicon,transparent:true, side: THREE.DoubleSide} );
                this.planeinstagramicon = new THREE.Mesh( this.geometryinstagramicon, this.materialinstagramicon );
                this.planeinstagramicon.position.set(0,1.5,1.59);
                this.planeinstagramicon.rotation.y = 53.5;
                this.planeinstagramicon.visible = true
                this.planeinstagramicon.name = 'instagram icon template 3'
                this.scene.add( this.planeinstagramicon );

                var recycleicon = new THREE.TextureLoader().load('../img/recycle.png');
                this.geometryrecycleicon = new THREE.PlaneGeometry( 0.31, 0.31 );
                this.materialrecycleicon = new THREE.MeshBasicMaterial( {color: 0xffffff , map : recycleicon,transparent:true, side: THREE.DoubleSide} );
                this.planerecycleicon = new THREE.Mesh( this.geometryrecycleicon, this.materialrecycleicon );
                this.planerecycleicon.position.set(0.3,1.5,-1.53);
                this.planerecycleicon.rotation.y = 53.5;
                this.planerecycleicon.visible = true
                this.planerecycleicon.name = 'recycle icon template 3'
                this.scene.add( this.planerecycleicon );


            }else{
                var template3text1 = this.scene.getObjectByName('text 1 template 3')
                this.scene.remove(template3text1)
                var template3text2 = this.scene.getObjectByName('text 2 template 3')
                this.scene.remove(template3text2)
                var template3text3 = this.scene.getObjectByName('text 3 template 3')
                this.scene.remove(template3text3)
                var template3text4 = this.scene.getObjectByName('text 4 template 3')
                this.scene.remove(template3text4)
                var template3text5 = this.scene.getObjectByName('text 5 template 3')
                this.scene.remove(template3text5)
                var template3facebookicon = this.scene.getObjectByName('facebook icon template 3')
                this.scene.remove(template3facebookicon)
                var template3instagramicon = this.scene.getObjectByName('instagram icon template 3')
                this.scene.remove(template3instagramicon)
                var template3recycleicon = this.scene.getObjectByName('recycle icon template 3')
                this.scene.remove(template3recycleicon)
            }   
    
            if(global.templatenumber===4){
                // posisi text di atas
                let selectfont;
                let tulisan1 = "Friendly Box";
                let tulisan2 = "";
                let tulisan3 = "";
                let tulisan4 = "Open Me";
                let tulisan5 = "www.mystore.com";
                let text1template4 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan1,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,2.39,0)
                    tmesh.rotation.x=54.98
                    tmesh.rotation.z=-40.83
                    tmesh.name = "text 1 template 4"
                    this.scene.add(tmesh)
                });

                let text2template4 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan2,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,1,-1.499)
                    tmesh.rotation.y=3.11
                    tmesh.name = "text 2 template 4"
                    this.scene.add(tmesh)
                });
            
                let text3template4 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan3,{
                        size: 0.1,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-0.6,1,1.499)
                    tmesh.name = "text 3 template 4"
                    this.scene.add(tmesh)
                });

                let text4template4 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan4,{
                        size: 0.3,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(1.55,1,0.8)
                    tmesh.rotation.y=1.6
                    tmesh.name = "text 4 template 4"
                    this.scene.add(tmesh)
                });

                let text5template4 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan5,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-1.52,1,-0.8)
                    tmesh.rotation.y=-1.6
                    tmesh.name = "text 5 template 4"
                    this.scene.add(tmesh)
                });

                var loveicon1 = new THREE.TextureLoader().load('../img/love-icon.png');
                this.geometryloveicon1 = new THREE.PlaneGeometry( 2, 2 );
                this.materialloveicon1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : loveicon1,transparent:true, side: THREE.DoubleSide} );
                this.planeloveicon1 = new THREE.Mesh( this.geometryloveicon1, this.materialloveicon1 );
                this.planeloveicon1.position.set(0,1.5,-1.45);
                this.planeloveicon1.rotation.y = 53.4;
                this.planeloveicon1.visible = true
                this.planeloveicon1.name = 'love1 icon template 4'
                this.scene.add( this.planeloveicon1 );

                var loveicon2 = new THREE.TextureLoader().load('../img/love-icon.png');
                this.geometryloveicon2 = new THREE.PlaneGeometry( 2, 2 );
                this.materialloveicon2 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : loveicon2,transparent:true, side: THREE.DoubleSide} );
                this.planeloveicon2 = new THREE.Mesh( this.geometryloveicon2, this.materialloveicon2 );
                this.planeloveicon2.position.set(0,1.5,1.48);
                this.planeloveicon2.rotation.y = 53.4;
                this.planeloveicon2.visible = true
                this.planeloveicon2.name = 'love2 icon template 4'
                this.scene.add( this.planeloveicon2 );


            }else{
                var template4text1 = this.scene.getObjectByName('text 1 template 4')
                this.scene.remove(template4text1)
                var template4text2 = this.scene.getObjectByName('text 2 template 4')
                this.scene.remove(template4text2)
                var template4text3 = this.scene.getObjectByName('text 3 template 4')
                this.scene.remove(template4text3)
                var template4text4 = this.scene.getObjectByName('text 4 template 4')
                this.scene.remove(template4text4)
                var template4text5 = this.scene.getObjectByName('text 5 template 4')
                this.scene.remove(template4text5)
                var template4loveicon1 = this.scene.getObjectByName('love1 icon template 4')
                this.scene.remove(template4loveicon1)
                var template4loveicon2 = this.scene.getObjectByName('love2 icon template 4')
                this.scene.remove(template4loveicon2)
            }   

                    
            if(global.templatenumber===5){
                // posisi text di atas
                let selectfont;
                let tulisan1 = "Hello There!";
                let tulisan2 = "All is Family";
                let tulisan3 = "Nice Day";
                let tulisan4 = "Lucky!";
                let tulisan5 = "www.mystore.com";
                let text1template5 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan1,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(1.2,2.39,-1)
                    tmesh.rotation.x=54.98
                    tmesh.rotation.z=-40.83
                    tmesh.name = "text 1 template 5"
                    this.scene.add(tmesh)
                });

                let text2template5 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan2,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(0.6,1,-1.499)
                    tmesh.rotation.y=3.11
                    tmesh.name = "text 2 template 5"
                    this.scene.add(tmesh)
                });
            
                let text3template5 = new FontLoader().load('./Bauhaus 93_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan3,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-1.2,0.2,1.499)
                    tmesh.name = "text 3 template 5"
                    this.scene.add(tmesh)
                });

                let text4template5 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan4,{
                        size: 0.3,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(1.55,1,0.4)
                    tmesh.rotation.y=1.6
                    tmesh.name = "text 4 template 5"
                    this.scene.add(tmesh)
                });

                let text5template5 = new FontLoader().load('./Gloucester MT Extra Condensed_Regular.json',(e)=>{
                    selectfont = e
                    let tGeo = new TextGeometry(tulisan5,{
                        size: 0.2,
                        height :0.001,
                        font :selectfont
                    });
                    let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                    let tmesh = new THREE.Mesh(tGeo,tmat);
                    tmesh.position.set(-1.52,1,-0.8)
                    tmesh.rotation.y=-1.6
                    tmesh.name = "text 5 template 5"
                    this.scene.add(tmesh)
                });

                var ball1 = new THREE.TextureLoader().load('../img/ball.png');
                this.geometryball1 = new THREE.PlaneGeometry( 0.5, 0.5 );
                this.materialball1 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : ball1,transparent:true, side: THREE.DoubleSide} );
                this.planeball1 = new THREE.Mesh( this.geometryball1, this.materialball1 );
                this.planeball1.position.set(0,1.5,-1.53);
                this.planeball1.rotation.y = 53.4;
                this.planeball1.visible = true
                this.planeball1.name = 'ball1 icon template 5'
                this.scene.add( this.planeball1 );

                var ball2 = new THREE.TextureLoader().load('../img/ball.png');
                this.geometryball2 = new THREE.PlaneGeometry( 0.5, 0.5 );
                this.materialball2 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : ball2,transparent:true, side: THREE.DoubleSide} );
                this.planeball2 = new THREE.Mesh( this.geometryball2, this.materialball2 );
                this.planeball2.position.set(1,1.9,1.50);
                this.planeball2.rotation.y = 53.4;
                this.planeball2.visible = true
                this.planeball2.name = 'ball2 icon template 5'
                this.scene.add( this.planeball2 );

                var ball3 = new THREE.TextureLoader().load('../img/ball.png');
                this.geometryball3 = new THREE.PlaneGeometry( 0.5, 0.5 );
                this.materialball3 = new THREE.MeshBasicMaterial( {color: 0xffffff , map : ball3,transparent:true, side: THREE.DoubleSide} );
                this.planeball3 = new THREE.Mesh( this.geometryball3, this.materialball3 );
                this.planeball3.position.set(1,1.4,1.50);
                this.planeball3.rotation.y = 53.4;
                this.planeball3.visible = true
                this.planeball3.name = 'ball3 icon template 5'
                this.scene.add( this.planeball3 );


            }else{
                var template5text1 = this.scene.getObjectByName('text 1 template 5')
                this.scene.remove(template5text1)
                var template5text2 = this.scene.getObjectByName('text 2 template 5')
                this.scene.remove(template5text2)
                var template5text3 = this.scene.getObjectByName('text 3 template 5')
                this.scene.remove(template5text3)
                var template5text4 = this.scene.getObjectByName('text 4 template 5')
                this.scene.remove(template5text4)
                var template5text5 = this.scene.getObjectByName('text 5 template 5')
                this.scene.remove(template5text5)
                var template5loveicon1 = this.scene.getObjectByName('ball1 icon template 5')
                this.scene.remove(template5loveicon1)
                var template5loveicon2 = this.scene.getObjectByName('ball2 icon template 5')
                this.scene.remove(template5loveicon2)
                var template5loveicon3 = this.scene.getObjectByName('ball3 icon template 5')
                this.scene.remove(template5loveicon3)
            }   
            global.changetemplate = false
        }
        //end template
        //update template
        if(global.isimgtemplateupdate === true){
            var facebookicon = new THREE.TextureLoader().load(global.imgtemplatedir);
            this.geometryfacebookicon = new THREE.PlaneGeometry( global.imgtemplatesize, global.imgtemplatesize );
            this.materialfacebookicon = new THREE.MeshBasicMaterial( {color: 0xffffff , map : facebookicon,transparent:true, side: THREE.DoubleSide} );
            this.planefacebookicon = new THREE.Mesh( this.geometryfacebookicon, this.materialfacebookicon );
            this.planefacebookicon.position.set(0,1.5,-1.53);
            this.planefacebookicon.rotation.y = 53.5;
            this.planefacebookicon.visible = true;
            this.planefacebookicon.name = global.imgobjectname;
            this.scene.add( this.planefacebookicon );
            global.isimgtemplateupdate = false;
        }
        
        if(global.istexttemplateupdate === true){
            let selectfont;
            let text1template1 = new FontLoader().load(global.textdirtemplate,(e)=>{
                selectfont = e
                let tGeo = new TextGeometry(global.texttulisantemplate,{
                    size: global.texttemplatesize,
                    height :0.001,
                    font :selectfont
                });
                let tmat = new THREE.MeshPhongMaterial({color: 0x000000});
                let tmesh = new THREE.Mesh(tGeo,tmat);
                if(global.facebox==="Top"){
                    tmesh.position.set(0.6,2.39,0)
                    tmesh.rotation.x=54.98
                    tmesh.rotation.z=-40.83
                }
                else if(global.facebox==="Front"){
                    tmesh.position.set(0.6,1,-1.499)
                    tmesh.rotation.y=3.11
                }else if(global.facebox==="Back"){
                    tmesh.position.set(-0.6,1,1.499)
                }else if(global.facebox==="Left"){
                    tmesh.position.set(1.55,1,0.8)
                    tmesh.rotation.y=1.6
                }else if(global.facebox==="Right"){
                    tmesh.position.set(-1.52,1,-0.5)
                    tmesh.rotation.y=-1.6
                }
                tmesh.name = global.texttemplateobjectname
                this.scene.add(tmesh)
            });
            global.istexttemplateupdate = false
        }
        //end update template

        //viewside
        
        if (global.facebox==="Front"){
            // camera view depan
            this.camera.position.y = 0.7;
            this.camera.position.x = 0;
            this.camera.position.z = -6.7;
            this.threedeview = false
            this.camera.rotation.y =-3.15
            this.camera.rotation.x =-0
            this.camera.rotation.z =-0

            var sel = this.scene.getObjectByName('dirLight')
            this.scene.remove(sel)
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( 1, 4, -30 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 1;
            dirLight.shadow.camera.bottom = - 1;
            dirLight.shadow.camera.left = - 1;
            dirLight.shadow.camera.right = 1;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 1;
            dirLight.shadow.mapSize.set( 1024, 1024 );
            dirLight.name = "dirLight"
            this.scene.add( dirLight );
            
            // this.cubeatas.visible= false
            // this.cubedepan.visible= false
            // this.cubebelakang.visible= false
            // this.cubekiri.visible= false
            // this.cubekanan.visible= false

        }
        if (global.facebox==="Bottom"){
            // camera view bawah
            this.camera.position.y = -4;
            this.camera.position.x = 0;
            this.camera.position.z = -0;
            this.threedeview = false
            this.camera.rotation.y =-0
            this.camera.rotation.x =-4.7
            this.camera.rotation.z =-0

            var sel = this.scene.getObjectByName('dirLight')
            this.scene.remove(sel)
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( 1, -50, -1 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 1;
            dirLight.shadow.camera.bottom = - 1;
            dirLight.shadow.camera.left = - 1;
            dirLight.shadow.camera.right = 1;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 1;
            dirLight.shadow.mapSize.set( 1024, 1024 );
            dirLight.name = "dirLight"
            this.scene.add( dirLight );

            // this.cubeatas.visible= false
            // this.cubedepan.visible= false
            // this.cubebelakang.visible= false
            // this.cubekiri.visible= false
            // this.cubekanan.visible= false
        }
        if (global.facebox==="Top"){
            // camera view atas
            this.camera.position.y = 5.8;
            this.camera.position.x = 0;
            this.camera.position.z = 0;
            this.threedeview = false
            this.camera.rotation.z =59.7
            this.camera.rotation.x =4.7
            this.camera.rotation.y =0

            var sel = this.scene.getObjectByName('dirLight')
            this.scene.remove(sel)
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( 1, 30, -30 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 1;
            dirLight.shadow.camera.bottom = - 1;
            dirLight.shadow.camera.left = - 1;
            dirLight.shadow.camera.right = 1;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 1;
            dirLight.shadow.mapSize.set( 1024, 1024 );
            dirLight.name = "dirLight"
            this.scene.add( dirLight );

            // this.cubeatas.visible= false
            // this.cubedepan.visible= false
            // this.cubebelakang.visible= false
            // this.cubekiri.visible= false
            // this.cubekanan.visible= false
        }
        if (global.facebox==="Back"){
            // camera view belakang
            this.camera.position.y = 0.7;
            this.camera.position.x = 0;
            this.camera.position.z = 6.5;
            this.threedeview = false
            this.camera.rotation.y =0
            this.camera.rotation.x =0
            this.camera.rotation.z =0

            var sel = this.scene.getObjectByName('dirLight')
            this.scene.remove(sel)
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( 1, 4, 30 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 1;
            dirLight.shadow.camera.bottom = - 1;
            dirLight.shadow.camera.left = - 1;
            dirLight.shadow.camera.right = 1;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 1;
            dirLight.shadow.mapSize.set( 1024, 1024 );
            dirLight.name = "dirLight"
            this.scene.add( dirLight );

            // this.cubeatas.visible= false
            // this.cubedepan.visible= false
            // this.cubebelakang.visible= false
            // this.cubekiri.visible= false
            // this.cubekanan.visible= false

        }
        if (global.facebox==="Right"){
            // camera view kanan
            this.camera.position.y = 1;
            this.camera.position.x = 5.5;
            this.camera.position.z = 0;
            this.threedeview = false
            this.camera.rotation.y =14.13
            this.camera.rotation.x =0
            this.camera.rotation.z =0

            var sel = this.scene.getObjectByName('dirLight')
            this.scene.remove(sel)
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( 13, 4, -1 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 1;
            dirLight.shadow.camera.bottom = - 1;
            dirLight.shadow.camera.left = - 1;
            dirLight.shadow.camera.right = 1;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 1;
            dirLight.shadow.mapSize.set( 1024, 1024 );
            dirLight.name = "dirLight"
            this.scene.add( dirLight );

            // this.cubeatas.visible= false
            // this.cubedepan.visible= false
            // this.cubebelakang.visible= false
            // this.cubekiri.visible= false
            // this.cubekanan.visible= false
        }
        if (global.facebox==="Left"){
            // camera view kiri
            this.camera.position.y = 1;
            this.camera.position.x = -5.5;
            this.camera.position.z = 0;
            this.threedeview = false
            this.camera.rotation.y =-14.13
            this.camera.rotation.z =0
            this.camera.rotation.x =0


            var sel = this.scene.getObjectByName('dirLight')
            this.scene.remove(sel)
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( -13, 4, 1 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 1;
            dirLight.shadow.camera.bottom = - 1;
            dirLight.shadow.camera.left = - 1;
            dirLight.shadow.camera.right = 1;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 1;
            dirLight.shadow.mapSize.set( 1024, 1024 );
            dirLight.name = "dirLight"
            this.scene.add( dirLight );

            // this.cubeatas.visible= false
            // this.cubedepan.visible= false
            // this.cubebelakang.visible= false
            // this.cubekiri.visible= false
            // this.cubekanan.visible= false
        }
        if (global.facebox==="3dview"){
        
            this.threedeview = true
            var sel = this.scene.getObjectByName('dirLight')
            this.scene.remove(sel)
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( 1, 4, -30 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 1;
            dirLight.shadow.camera.bottom = - 1;
            dirLight.shadow.camera.left = - 1;
            dirLight.shadow.camera.right = 1;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 1;
            dirLight.shadow.mapSize.set( 1024, 1024 );
            dirLight.name = "dirLight"
            this.scene.add( dirLight );

            // this.cubeatas.visible= true
            // this.cubedepan.visible= true
            // this.cubebelakang.visible= true
            // this.cubekiri.visible= true
            // this.cubekanan.visible= true
        }

        //end viewside
            

        if(this.isSelect===true){
            this.time -=0.1;
            if(this.time <=0){
                this.isSelect = false
                this.cubeatas.material.opacity = 0.0;
                this.cubebawah.material.opacity = 0.0;
                this.cubedepan.material.opacity = 0.0;
                this.cubebelakang.material.opacity = 0.0;
                this.cubekiri.material.opacity = 0.0;
                this.cubekanan.material.opacity = 0.0;
                this.time = this.timetill
            }
        }
        requestAnimationFrame(this.animation);
        this.renderer.render(this.scene, this.camera); 
   
    }

    handleWindowsResize=()=>{
        this.camera.aspect = window.innerWidth/window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.render(this.scene,this.camera);
    }

    render(){
        return(
            <div
            ref={mount => {
                this.mount = mount;
            }}
            />
        )
   }
}
export default ThreeScene;