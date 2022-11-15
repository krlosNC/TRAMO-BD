class Tramo {

    // TABLA CLIENTE NATURAL
    tblClienteNatural = {
        _id: 0,
        _nombre: " ",
        _apellido: "",
        _correo: " ",
        _contrasena: " ",
        _fechaNacimiento: " ",
        _numeroTelefono: 0,
        _fotoPerfil:""
     }
    
     setagregarClienteNatural(id, nombre, apellido, correo, contrasena, fechanacimiento, numerotelefono,fotoperfil){
    
      if( id== 0 , nombre=="", apellido=="", correo=="", contrasena=="", fechanacimiento== "", numerotelefono=== 0, fotoperfil== ""){
        alert("Ingrese todos los campos")
      }else{
        this.tblClienteNatural._id = id;
        this.tblClienteNatural._nombre = nombre;
        this.tblClienteNatural._apellido = apellido;
        this.tblClienteNatural._correo = correo;
        this.tblClienteNatural._contrasena = contrasena;
        this.tblClienteNatural._fechaNacimiento = fechanacimiento;
        this.tblClienteNatural._numeroTelefono = numerotelefono;
        this.tblClienteNatural._fotoPerfil=fotoperfil;
        console.table(this.getcliente);
      }
     }
     get getcliente(){
      return this.tblClienteNatural
     }

    //  =========================================
    // TABLA CLIENTE EMPRESA
    //  =========================================
    clienteEmpresa = {
      _Nit: "",
      _TipoIdentificacion: "",
      _RazonSocial: "",
      _Representantelegal: "",
      _DireccionEmpresa: "",
      _Telefono: 0,
      _Correo: "",
      _FotoPerfil: "",
      _contraseña: "",
      _Idusuario: 0,
    };
  
    fnsetDatosTramo(txtIdNit,txtIdClienteTipoIdentificacion,txtIdClienteRazonSocial,txtIdClienteRepresentantelegal,txtIdClienteDireccionEmpresa,txtClienteTelefono,txtIdClienteCorreo,txtIdClienteFotoPerfil,txtIdClientecontraseña,txtIdIdusuario){
  
      if(txtIdNit=="",txtIdClienteTipoIdentificacion=="",txtIdClienteRazonSocial=="",txtIdClienteRepresentantelegal=="",txtIdClienteDireccionEmpresa=="",txtClienteTelefono==0,txtIdClienteCorreo=="",txtIdClienteFotoPerfil=="",txtIdClientecontraseña=="",txtIdIdusuario==""){
          alert("Ingrese todos los campo")
      }else{
          this.clienteEmpresa._Nit = txtIdNit;
          this.clienteEmpresa._TipoIdentificacion = txtIdClienteTipoIdentificacion;
          this.clienteEmpresa._RazonSocial = txtIdClienteRazonSocial;
          this.clienteEmpresa._Representantelegal = txtIdClienteRepresentantelegal;
          this.clienteEmpresa._DireccionEmpresa = txtIdClienteDireccionEmpresa;
          this.clienteEmpresa._Telefono = txtClienteTelefono;
          this.clienteEmpresa._Correo = txtIdClienteCorreo;
          this.clienteEmpresa._FotoPerfil = txtIdClienteFotoPerfil;
          this.clienteEmpresa._contraseña = txtIdClientecontraseña;
          this.clienteEmpresa._Idusuario = txtIdIdusuario;
      
          console.table(this.getDatosTramo);
      }
    }
  
    get getDatosTramo() {
      return this.clienteEmpresa;
    }
    //  =========================================
    // TABLA VEHICULO TRAMO
    //  =========================================

    vehiculo = {
        _tipoVehiculo: "",
        _marcaVehiculo: "",
        _modeloVehiculo: 0,
        _numeroEjesVehiculo: 0,
        _tipoTraccionVehiculo: "",
        _placaVehiculo: "",
        _placaTrailerVehiculo: "",
        _pesoVacioVehiculo: 0,
        _tipoCombustibleVehiculo: "",
        _numeroLicenciaVehiculo: "",
        _numeroSoatVehiculo: "",
        _fechaVencimientoSoat: 0,
        _numeroPolizaResponsabilidad: 0,
        _numeroTecnomecanicaVehiculo: 0,
        _fechaVencimientoTecnomecanica: 0
      };
    
      setagregarVehiculo(tipo, marca, modelo, numEjes, traccion, placa, placaSR, pesoVH, combustible, licenciaVH, soatVH, venciSoat, polizaRes, tecnoVH, venciTecno) {
    
        if(tipo=="", marca=="" , modelo==0 , numEjes==0 , traccion=="" , placa=="" , placaSR=="" , pesoVH==0 , combustible=="" , licenciaVH=="" , soatVH=="" , venciSoat==0 , polizaRes==0 , tecnoVH==0 , venciTecno==0){
    
          alert("Ingrese todos los datos")
    
        }else{
        this.vehiculo._tipoVehiculo = tipo;
        this.vehiculo._marcaVehiculo = marca;
        this.vehiculo._modeloVehiculo = modelo;
        this.vehiculo._numeroEjesVehiculo = numEjes;
        this.vehiculo._tipoTraccionVehiculo = traccion;
        this.vehiculo._placaVehiculo = placa;
        this.vehiculo._placaTrailerVehiculo = placaSR;
        this.vehiculo._pesoVacioVehiculo = pesoVH;
        this.vehiculo._tipoCombustibleVehiculo = combustible;
        this.vehiculo._numeroLicenciaVehiculo = licenciaVH;
        this.vehiculo._numeroSoatVehiculo = soatVH;
        this.vehiculo._fechaVencimientoSoat = venciSoat;
        this.vehiculo._numeroPolizaResponsabilidad = polizaRes;
        this.vehiculo._numeroTecnomecanicaVehiculo = tecnoVH;
        this.vehiculo._fechaVencimientoTecnomecanica = venciTecno;
    
        console.table(this.getVehiculo);
    
        }
      
      }
    
      get getVehiculo(){
        return this.vehiculo
      }
      //  =========================================
      // TABLA CONDUCTOR TRAMO
      //  =========================================

      conductor = {
        identificacion: 0,
        usuario: "",
        nombre: "",
        apellido: "",
        fechanAcimiento: "",
        nacionalidad: "",
        contraseña: "",
        repetirContraseña: "",
        correoElectronico: "",
        telefono: 0,
      };
    
      setagregarConductor(
        identificacion,
        usuario,
        nombre,
        apellido,
        fechanAcimiento,
        nacionalidad,
        contraseña,
        repetirContraseña,
        correo,
        telefono
      ) {
        if (
          (identificacion == 0,
          usuario == "",
          nombre == "",
          apellido == "",
          fechanAcimiento == "",
          nacionalidad == "",
          contraseña == "",
          repetirContraseña == "",
          correo == "",
          telefono == "")
        ) {
          alert("llenar completos los datos");
        } else {
          this.conductor._identificacion = identificacion;
          this.conductor._usuario = usuario;
          this.conductor._nombre = nombre;
          this.conductor._fechaNacimiento = fechanAcimiento;
          this.conductor._nacionalidad = nacionalidad;
          this.conductor._contraseña = contraseña;
          this.conductor._repetirContraseña = repetirContraseña;
          this.conductor._correo = correo;
          this.conductor._telefono = telefono;
    
          console.table(this.getConductor);
        }
      }
    
      get getConductor() {
        return this.conductor;
      }
  }

  var instaTramo = new Tramo();