function show_error(field, msg){
	
	modal_window({
		message: '<div class="alert alert-danger">' + msg + '</div>',
		title: 'Error in ' + field,
		close: function(){
			$j('#' + field).focus();
			$j('#' + field).parents('.form-group').addClass('has-error');
		}
	});
	
	return false;
}

function get_date(date_field){
	var y = $j('#' + date_field).val();
	var m = $j('#' + date_field + '-mm').val();
	var d = $j('#' + date_field + '-dd').val();
	
	var date_object = new Date(y, m - 1, d);
	
	if(!y) return false;
	
	return date_object;
}

$j(function(){
	
/* fecha de solicitud VcrFecVis no puede ser mayor a la actual */

	$j('#VcrFecVis, #VcrFecVis-mm, #VcrFecVis-dd').change(function(){
		
		var now = new Date();
		var fecha = get_date('VcrFecVis');
		
		if(fecha && (fecha > now)){
			show_error('fecha', 'La fecha no puede ser mayor a la actual');
			$j('#' + 'fecha').focus();
			$j('#' + 'fecha').parents('.form-group').addClass('has-error');
		} else {
			$j('#' + 'fecha').parents('.form-group').removeClass('has-error');
		}
	});

/* Valida el campo cedula VcrNoIde de la persona que atiende */	

	$j('#VcrNoIde').change(function(){
		var VcrNoIde = $j('#VcrNoIde').val();

		if(isNaN(VcrNoIde) || VcrNoIde < 1000000 || VcrNoIde > 9999999999){
			show_error('VcrNoIde', 'el número de identificación es incorrecto');
			$j('#' + 'VcrNoIde').focus();
			$j('#' + 'VcrNoIde').parents('.form-group').addClass('has-error');
		} else {
			$j('#' + 'VcrNoIde').parents('.form-group').removeClass('has-error');
		}
	});

	/* Valida el campo cedula VcrNumIde de la persona que atiende */	

	$j('#VcrNumIde').change(function(){
		var Identifica = $j('#VcrNumIde').val();

		if(isNaN(Identifica) || Identifica < 1000000 || Identifica > 9999999999){
			show_error('Identifica', 'el número de identificación es incorrecto');
			$j('#' + 'Identifica').focus();
			$j('#' + 'Identifica').parents('.form-group').addClass('has-error');
		} else {
			$j('#' + 'Identifica').parents('.form-group').removeClass('has-error');
		}
	});

	/* Valida el campo email */	

$j('#VcrCorEle').change(function(){
	var email = $j('#VcrCorEle').val();

	if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
		show_error('VcrCorEle', 'El correo electrónico es incorrecto');
		$j('#' + 'VcrCorEle').focus();
		$j('#' + 'VcrCorEle').parents('.form-group').addClass('has-error');
	} else {
		$j('#' + 'VcrCorEle').parents('.form-group').removeClass('has-error');
	}
});

/* fecha de radicado VcrFecSol no puede ser mayor a la actual */


$j('#VcrFecSol, #VcrFecSol-mm, #VcrFecSol-dd').change(function(){
		
	var now = new Date();
	var fecha = get_date('VcrFecSol');
	
	if(fecha && (fecha > now)){
		show_error('fecha', 'La fecha no puede ser mayor a la actual');
		$j('#' + 'fecha').focus();
		$j('#' + 'fecha').parents('.form-group').addClass('has-error');
	} else {
		$j('#' + 'fecha').parents('.form-group').removeClass('has-error');
	}
});

/* Validación del numero telefónico VcrCel que no vaya vacio y que contenga 10 digitos númericos */

$j('#VcrCel').blur(function(){
    var cel = $j('#VcrCel').val();
    var regex = /^\d{3}-?\d{3}-?\d{4}$/; // Expresión regular para validar el número de teléfono

    if(!regex.test(cel)){
        return show_error('VcrCel', 'Ingrese un número de teléfono válido de 10 digitos, si es un número fijo anteponga 602');
    }
});

/* Validación del nombre de la persona que atiende que tenga mas de 8 caracteres y que tenga letras y espacios */

$j('#VcrNomAti').on('blur', function(){
    var nombre = $j('#VcrNomAti').val();

    if(nombre.length < 8){
        return show_error('VcrNomAti', 'El nombre debe tener al menos 8 caracteres');
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        return show_error('VcrNomAti', 'El nombre solo debe contener letras y espacios');
    }

});

/* Validación del nombre de la persona que atiende que tenga mas de 8 caracteres y que tenga letras y espacios */

$j('#VcrNomAtVis').on('blur', function(){
    var nombre = $j('#VcrNomAtVis').val();

    if(nombre.length < 8){
        return show_error('VcrNomAtVis', 'El nombre debe tener al menos 8 caracteres');
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        return show_error('VcrNomAtVis', 'El nombre solo debe contener letras y espacios');
    }

});

$j('#VcrIdUbi').on('change', function() {
    var ubicacion = parseInt($j(this).val()); // convertir a entero
    var barrio = $j('#VcrIdBarVe');
    var comuna = $j('#VcrIdCom');
    var correo = $j('#VcrIdCorr');
    
    if (ubicacion === 8001011701) { // usar comparación estricta
        barrio.parents('.form-group').show();
        comuna.parents('.form-group').show();
        correo.parents('.form-group').hide().find('input').val('no aplica');
    } else if (ubicacion === 8001011702 || ubicacion === 8001011703) { // usar comparación estricta
        barrio.parents('.form-group').hide().find('input').val('no aplica');
        comuna.parents('.form-group').hide().find('input').val('no aplica');
        correo.parents('.form-group').show();
    } else {
        barrio.parents('.form-group').hide().find('input').val('no aplica');
        comuna.parents('.form-group').hide().find('input').val('no aplica');
        correo.parents('.form-group').hide().find('input').val('no aplica');
    }
});

}
);
