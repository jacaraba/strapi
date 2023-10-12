-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2023 a las 23:43:09
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u392441939_siigred`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad_economica`
--

CREATE TABLE `actividad_economica` (
  `VcrIdAct` varchar(10) NOT NULL,
  `VcrActEco` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividad_economica`
--

INSERT INTO `actividad_economica` (`VcrIdAct`, `VcrActEco`) VALUES
('1011', 'Procesamiento y conservación de carne y productos cárnicos'),
('1012', 'Procesamiento y conservación de pescados, crustáceos y moluscos'),
('10201', 'Procesamiento y conservación de frutas, legumbres, hortalizas y tubérculos (excepto elaboración de jugos de frutas)'),
('10202', 'Elaboración de jugos de frutas'),
('1030', 'Elaboración de aceites y grasas de origen vegetal y animal'),
('10401', 'Elaboración de productos lácteos (excepto bebidas)'),
('10402', 'Elaboración de bebidas lácteas'),
('1051', 'Elaboración de productos de molinería'),
('1052', 'Elaboración de almidones y productos derivados del almidón'),
('1061', 'Trilla de café'),
('1062', 'Descafeinado, tostión y molienda del café'),
('1063', 'Elaboración de otros derivados del café'),
('1071', 'Elaboración y refinación de azúcar'),
('1072', 'Elaboración de panela'),
('1081', 'Elaboración de productos de panadería'),
('1082', 'Elaboración de cacao, chocolate y productos de confitería'),
('1083', 'Elaboración de macarrones, fideos, alcuzcuz y productos farináceos similares'),
('1084', 'Elaboración de comidas y platos preparados'),
('1089', 'Elaboración de otros productos alimenticios n.c.p.'),
('1090', 'Elaboración de alimentos preparados para animales'),
('1101', 'Destilación, rectificación y mezcla de bebidas alcohólicas'),
('1102', 'Elaboración de bebidas fermentadas no destiladas'),
('1103', 'Producción de malta, elaboración de cervezas y otras bebidas malteadas'),
('1104', 'Elaboración de bebidas no alcohólicas, producción de aguas minerales y de otras aguas embotelladas'),
('1200', 'Elaboración de productos de tabaco'),
('1311', 'Preparación e hilatura de fibras textiles'),
('1312', 'Tejeduría de productos textiles'),
('1313', 'Acabado de productos textiles'),
('1391', 'Fabricación de tejidos de punto y ganchillo'),
('1392', 'Confección de artículos con materiales textiles, excepto prendas de vestir'),
('1393', 'Fabricación de tapetes y alfombras para pisos'),
('1394', 'Fabricación de cuerdas, cordeles, cables, bramantes y redes'),
('1399', 'Fabricación de otros artículos textiles n.c.p.'),
('141', 'Cría de ganado bovino y bufalino'),
('1410', 'Confección de prendas de vestir, excepto prendas de piel'),
('142', 'Cría de caballos y otros equinos'),
('14201', 'Fabricación de prendas de vestir de piel'),
('14202', 'Fabricación de artículos de piel (excepto prendas de vestir)'),
('143', 'Cría de ovejas y cabras'),
('14301', 'Fabricación de prendas de vestir de punto y ganchillo'),
('14302', 'Fabricación de artículos de punto y ganchillo (excepto prendas de vestir)'),
('144', 'Cría de ganado porcino'),
('145', 'Cría de aves de corral'),
('149', 'Cría de otros animales n.c.p.'),
('150', 'Explotación primaria mixta (agrícola y pecuaria)'),
('1511', 'Curtido y recurtido de cueros; recurtido y teñido de pieles.'),
('1512', 'Fabricación de artículos de viaje, bolsos de mano y artículos similares elaborados en cuero, y fabricación de artículos de talabartería y guarnicionería.'),
('1513', 'Fabricación de artículos de viaje, bolsos de mano y artículos similares; artículos de talabartería y guarnicionería elaborados en otros materiales'),
('1521', 'Fabricación de calzado de cuero y piel, con cualquier tipo de suela'),
('1522', 'Fabricación de otros tipos de calzado, excepto calzado de cuero y piel'),
('1523', 'Fabricación de partes del calzado'),
('161', 'Actividades de apoyo a la agricultura'),
('1610', 'Aserrado, acepillado e impregnación de la madera'),
('162', 'Actividades de apoyo a la ganadería'),
('1620', 'Fabricación de hojas de madera para enchapado; fabricación de tableros contrachapados, tableros laminados, tableros de partículas y otros tableros y paneles'),
('163', 'Actividades posteriores a la cosecha'),
('1630', 'Fabricación de partes y piezas de madera, de carpintería y ebanistería para la construcción y para edificios'),
('164', 'Tratamiento de semillas para propagación'),
('1640', 'Fabricación de recipientes de madera'),
('1690', 'Fabricación de otros productos de madera; fabricación de artículos de corcho, cestería y espartería'),
('170', 'Caza ordinaria y mediante trampas y actividades de servicios conexas'),
('1701', 'Fabricación de pulpas (pastas) celulósicas; papel y cartón'),
('1702', 'Fabricación de papel y cartón ondulado (corrugado); fabricación de envases, empaques y de embalajes de papel y cartón.'),
('1709', 'Fabricación de otros artículos de papel y cartón'),
('1811', 'Actividades de impresión'),
('1812', 'Actividades de servicios relacionados con la impresión'),
('1820', 'Producción de copias a partir de grabaciones originales'),
('1910', 'Fabricación de productos de hornos de coque'),
('1921', 'Fabricación de productos de la refinación del petróleo'),
('1922', 'Actividad de mezcla de combustibles'),
('2011', 'Fabricación de sustancias y productos químicos básicos'),
('2012', 'Fabricación de abonos y compuestos inorgánicos nitrogenados'),
('2013', 'Fabricación de plásticos en formas primarias'),
('2014', 'Fabricación de caucho sintético en formas primarias'),
('2021', 'Fabricación de plaguicidas y otros productos químicos de uso agropecuario'),
('2022', 'Fabricación de pinturas, barnices y revestimientos similares, tintas para impresión y masillas'),
('2023', 'Fabricación de jabones y detergentes, preparados para limpiar y pulir; perfumes y preparados de tocador'),
('2029', 'Fabricación de otros productos químicos n.c.p.'),
('2030', 'Fabricación de fibras sintéticas y artificiales'),
('210', 'Silvicultura y otras actividades forestales'),
('2100', 'Fabricación de productos farmacéuticos, sustancias químicas medicinales y productos botánicos de uso farmacéutico'),
('220', 'Extracción de madera'),
('2211', 'Fabricación de llantas y neumáticos de caucho'),
('2212', 'Reencauche de llantas usadas'),
('2219', 'Fabricación de formas básicas de caucho y otros productos de caucho n.c.p.'),
('2221', 'Fabricación de formas básicas de plástico'),
('2229', 'Fabricación de artículos de plástico n.c.p.'),
('230', 'Recolección de productos forestales diferentes a la madera'),
('2310', 'Fabricación de vidrio y productos de vidrio'),
('2391', 'Fabricación de productos refractarios'),
('2392', 'Fabricación de materiales de arcilla para la construcción'),
('2393', 'Fabricación de otros productos de cerámica y porcelana'),
('2394', 'Fabricación de cemento, cal y yeso'),
('2395', 'Fabricación de artículos de hormigón, cemento y yeso'),
('2396', 'Corte, tallado y acabado de la piedra'),
('2399', 'Fabricación de otros productos minerales no metálicos n.c.p.'),
('240', 'Servicios de apoyo a la silvicultura'),
('2410', 'Industrias básicas de hierro y de acero'),
('2421', 'Industrias básicas de metales preciosos'),
('2429', 'Industrias básicas de otros metales no ferrosos'),
('2431', 'Fundición de hierro y de acero'),
('2432', 'Fundición de metales no ferrosos'),
('2511', 'Fabricación de productos metálicos para uso estructural'),
('2512', 'Fabricación de tanques, depósitos y recipientes de metal, excepto los utilizados para el envase o transporte de mercancías'),
('2513', 'Fabricación de generadores de vapor, excepto calderas de agua caliente para calefacción central'),
('2520', 'Fabricación de armas y municiones'),
('2591', 'Forja, prensado, estampado y laminado de metal; pulvimetalurgia'),
('2592', 'Tratamiento y revestimiento\nde metales; mecanizado'),
('2593', 'Fabricación de artículos de cuchillería, herramientas de mano y artículos de ferretería'),
('2599', 'Fabricación de otros productos elaborados de metal n.c.p.'),
('2610', 'Fabricación de componentes y tableros electrónicos'),
('2620', 'Fabricación de computadoras y de equipo periférico'),
('2630', 'Fabricación de equipos de comunicación'),
('2640', 'Fabricación de aparatos electrónicos de consumo'),
('2651', 'Fabricación de equipo de medición, prueba, navegación y control'),
('2652', 'Fabricación de relojes'),
('2660', 'Fabricación de equipo de irradiación y equipo electrónico de uso médico y terapéutico'),
('2670', 'Fabricación de instrumentos ópticos y equipo fotográfico'),
('2680', 'Fabricación de soportes magnéticos y ópticos'),
('2711', 'Fabricación de motores, generadores y transformadores eléctricos.'),
('2712', 'Fabricación de aparatos de distribución y control de la energía eléctrica'),
('2720', 'Fabricación de pilas, baterías y acumuladores eléctricos'),
('2731', 'Fabricación de hilos y cables eléctricos y de fibra óptica'),
('2732', 'Fabricación de dispositivos de cableado'),
('2740', 'Fabricación de equipos eléctricos de iluminación'),
('2750', 'Fabricación de aparatos de uso doméstico'),
('2790', 'Fabricación de otros tipos de equipo eléctrico n.c.p.'),
('2811', 'Fabricación de motores, turbinas, y partes para motores de combustión interna'),
('2812', 'Fabricación de equipos de potencia hidráulica y neumática'),
('2813', 'Fabricación de otras bombas, compresores, grifos y válvulas'),
('2814', 'Fabricación de cojinetes, engranajes, trenes de engranajes y piezas de transmisión'),
('2815', 'Fabricación de hornos, hogares y quemadores industriales'),
('2816', 'Fabricación de equipo de elevación y manipulación'),
('2817', 'Fabricación de maquinaria y equipo de oficina (excepto computadoras y equipo periférico)'),
('2818', 'Fabricación de herramientas manuales con motor'),
('2819', 'Fabricación de otros tipos de maquinaria y equipo de uso general n.c.p.'),
('2821', 'Fabricación de maquinaria agropecuaria y forestal'),
('2822', 'Fabricación de máquinas formadoras de metal y de máquinas herramienta'),
('2823', 'Fabricación de maquinaria para la metalurgia'),
('2824', 'Fabricación de maquinaria para explotación de minas y canteras y para obras de construcción'),
('2825', 'Fabricación de maquinaria para la elaboración de alimentos, bebidas y tabaco'),
('2826', 'Fabricación de maquinaria para la elaboración de productos textiles, prendas de vestir y cueros'),
('2829', 'Fabricación de otros tipos de maquinaria y equipo de uso especial n.c.p.'),
('2910', 'Fabricación de vehículos automotores y sus motores'),
('2920', 'Fabricación de carrocerías para vehículos automotores; fabricación de remolques y semirremolques'),
('2930', 'Fabricación de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores'),
('3011', 'Construcción de barcos y de estructuras flotantes'),
('3012', 'Construcción de embarcaciones de recreo y deporte'),
('3020', 'Fabricación de locomotoras y de material rodante para ferrocarriles'),
('3030', 'Fabricación de aeronaves, naves espaciales y de maquinaria conexa'),
('3040', 'Fabricación de vehículos militares de combate'),
('3091', 'Fabricación de motocicletas'),
('3092', 'Fabricación de bicicletas y de sillas de ruedas para personas con discapacidad'),
('3099', 'Fabricación de otros tipos de equipo de transporte n.c.p.'),
('311', 'Pesca marítima'),
('3110', 'Fabricación de muebles'),
('312', 'Pesca de agua dulce'),
('3120', 'Fabricación de colchones y somieres'),
('321', 'Acuicultura marítima'),
('3210', 'Fabricación de joyas, bisutería y artículos conexos'),
('322', 'Acuicultura de agua dulce'),
('3220', 'Fabricación de instrumentos musicales'),
('3230', 'Fabricación de artículos y\nequipo para la práctica del\ndeporte (excepto prendas\nde vestir y calzado)'),
('3240', 'Fabricación de juegos,\njuguetes y rompecabezas'),
('3250', 'Fabricación de\ninstrumentos, aparatos y\nmateriales médicos y\nodontológicos (incluido\nmobiliario)'),
('3290', 'Otras industrias manufactureras n.c.p.'),
('3311', 'Mantenimiento y reparación especializado de productos elaborados en metal'),
('3312', 'Mantenimiento y reparación especializado de maquinaria y equipo'),
('3313', 'Mantenimiento y reparación especializado de equipo electrónico y óptico'),
('3314', 'Mantenimiento y reparación especializado de equipo eléctrico'),
('3315', 'Mantenimiento y reparación especializado de equipo de transporte, excepto los vehículos automotores, motocicletas y bicicletas'),
('3319', 'Mantenimiento y reparación de otros tipos de equipos y sus componentes n.c.p.'),
('3320', 'Instalación especializada de maquinaria y equipo industrial'),
('3511', 'Generación de energía eléctrica'),
('3512', 'Transmisión de energía eléctrica'),
('3513', 'Distribución de energía eléctrica'),
('3514', 'Comercialización de energía eléctrica'),
('35201', 'Producción de gas'),
('35202', 'Distribución de combustibles gaseosos por tuberías'),
('3530', 'Suministro de vapor y aire acondicionado'),
('36001', 'Captación y tratamiento de agua'),
('36002', 'Distribución de agua'),
('3700', 'Evacuación y tratamiento de aguas residuales'),
('3811', 'Recolección de desechos no peligrosos'),
('3812', 'Recolección de desechos peligrosos'),
('3821', 'Tratamiento y disposición de desechos no peligrosos'),
('3822', 'Tratamiento y disposición de desechos peligrosos'),
('3830', 'Recuperación de materiales'),
('39001', 'Actividades de saneamiento ambiental y otros servicios de gestión de desechos (excepto los servicios prestados por contratistas de construcción, constructores y urbanizadores)'),
('39002', 'Actividades de saneamiento ambiental y otros de gestión de desechos prestados por contratistas de construcción, constructores y urbanizadores'),
('4111', 'Construcción de edificios residenciales'),
('4112', 'Construcción de edificios no residenciales'),
('4210', 'Construcción de carreteras y vías de ferrocarril'),
('4220', 'Construcción de proyectos de servicio público'),
('4290', 'Construcción de otras obras de ingeniería civil'),
('4311', 'Demolición'),
('4312', 'Preparación del terreno'),
('4321', 'Instalaciones eléctricas de la construcción'),
('4322', 'Instalaciones de fontanería, calefacción y aire acondicionado de la construcción'),
('4329', 'Otras instalaciones especializadas de la construcción'),
('4330', 'Terminación y acabado de edificios y obras de ingeniería civil'),
('4390', 'Otras actividades especializadas para la construcción de edificios y obras de ingeniería civil'),
('4511', 'Comercio de vehículos automotores nuevos'),
('4512', 'Comercio de vehículos automotores usados'),
('4520', 'Mantenimiento y reparación de vehículos automotores.'),
('4530', 'Comercio de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores'),
('45411', 'Comercio de motocicletas'),
('45412', 'Comercio de partes, piezas y accesorios de motocicletas'),
('4542', 'Mantenimiento y reparación de motocicletas y de sus partes y piezas'),
('4610', 'Comercio al por mayor a cambio de una retribución o por contrata'),
('46201', 'Comercio al por mayor de materias primas agrícolas en bruto (alimentos)'),
('46202', 'Comercio al por mayor de materias primas pecuarias y animales vivos'),
('4631', 'Comercio al por mayor de productos alimenticios'),
('46321', 'Comercio al por mayor de bebidas y tabaco (diferentes a licores y cigarrillos)'),
('46322', 'Comercio al por mayor de licores y cigarrillos'),
('4641', 'Comercio al por mayor de productos textiles y productos confeccionados para uso doméstico'),
('4642', 'Comercio al por mayor de prendas de vestir'),
('4643', 'Comercio al por mayor de calzado'),
('4644', 'Comercio al por mayor de aparatos y equipo de uso doméstico'),
('46451', 'Comercio al por mayor de productos farmacéuticos y medicinales'),
('46452', 'Comercio al por mayor de productos cosméticos y de tocador (excepto productos farmacéuticos y medicinales)'),
('46491', 'Comercio al por mayor de otros utensilios domésticos n.c.p. (excepto joyas)'),
('46492', 'Venta de joyas'),
('4651', 'Comercio al por mayor de computadores, equipo periférico y programas de informática'),
('4652', 'Comercio al por mayor de equipo, partes y piezas electrónicos y de telecomunicaciones'),
('4653', 'Comercio al por mayor de maquinaria y equipo agropecuarios'),
('4659', 'Comercio al por mayor de otros tipos de maquinaria y equipo n.c.p.'),
('46611', 'Comercio al por mayor de combustibles sólidos, líquidos, gaseosos y productos conexos (excepto combustibles derivados del petróleo)'),
('46612', 'Comercio al por mayor de combustibles derivados del petróleo'),
('4662', 'Comercio al por mayor de metales y productos metalíferos'),
('46631', 'Comercio al por mayor de materiales de construcción'),
('46632', 'Comercio al por mayor de artículos de ferretería, pinturas, productos de vidrio, equipo y materiales de fontanería y calefacción'),
('4664', 'Comercio al por mayor de productos químicos básicos, cauchos y plásticos en formas primarias y productos químicos de uso agropecuario'),
('4665', 'Comercio al por mayor de desperdicios, desechos y chatarra'),
('4669', 'Comercio al por mayor de otros productos n.c.p.'),
('4690', 'Comercio al por mayor no especializado'),
('47111', 'Comercio al por menor en establecimientos no especializados con surtido compuesto principalmente por alimentos, bebidas no alcohólicas o tabaco (excepto cigarrillos)'),
('47112', 'Comercio al por menor en establecimientos no especializados con surtido compuesto principalmente por licores y cigarrillos'),
('47191', 'Comercio al por menor en establecimientos no especializados, con surtido compuesto principalmente por productos de bebidas alcohólicas y cigarrillos'),
('47192', 'Comercio al por menor en establecimientos no especializados, con surtido compuesto principalmente por drogas, medicamentos, textos escolares, libros y cuadernos.'),
('4721', 'Comercio al por menor de productos agrícolas para el consumo en establecimientos especializados'),
('4722', 'Comercio al por menor de leche, productos lácteos y huevos, en establecimientos especializados'),
('4723', 'Comercio al por menor de carnes (incluye aves de corral), productos cárnicos, pescados y productos de mar, en establecimientos especializados'),
('47241', 'Comercio al por menor de bebidas y productos del tabaco, en establecimientos especializados (excepto licores y cigarrillos)'),
('47242', 'Comercio al por menor de licores y cigarrillos'),
('4729', 'Comercio al por menor de otros productos alimenticios n.c.p., en establecimientos especializados'),
('4731', 'Comercio al por menor de combustible para automotores'),
('4732', 'Comercio al por menor de lubricantes (aceites, grasas), aditivos y productos de limpieza para vehículos automotores'),
('4741', 'Comercio al por menor de computadores, equipos periféricos, programas de informática y equipos de telecomunicaciones en establecimientos especializados'),
('4742', 'Comercio al por menor de equipos y aparatos de sonido y de video, en establecimientos especializados'),
('4751', 'Comercio al por menor de productos textiles en establecimientos especializados'),
('47521', 'Comercio al por menor de materiales de construcción'),
('47522', 'Comercio al por menor de artículos de ferretería, pinturas y productos de vidrio en establecimientos especializados (excepto materiales de construcción)'),
('4753', 'Comercio al por menor de tapices, alfombras y recubrimientos para paredes y pisos en establecimientos especializados'),
('4754', 'Comercio al por menor de electrodomésticos y gasodomésticos de uso doméstico, muebles y equipos de iluminación en establecimientos especializados'),
('4755', 'Comercio al por menor de artículos y utensilios de uso doméstico en establecimientos especializados'),
('4759', 'Comercio al por menor de otros artículos domésticos en establecimientos especializados'),
('47611', 'Comercio al por menor y al por mayor de libros, textos escolares y cuadernos'),
('47612', 'Comercio al por menor de periódicos, materiales y artículos de papelería y escritorio, en establecimientos especializados (excepto libros, textos escolares y cuadernos)'),
('4762', 'Comercio al por menor de artículos deportivos, en establecimientos especializados'),
('4769', 'Comercio al por menor de otros artículos culturales y de entretenimiento n.c.p. en establecimientos especializados'),
('4771', 'Comercio al por menor de prendas de vestir y sus accesorios (incluye artículos de piel) en establecimientos especializados'),
('4772', 'Comercio al por menor de todo tipo de calzado y artículos de cuero y sucedáneos del cuero en establecimientos especializados.'),
('47731', 'Comercio al por menor de productos farmacéuticos y medicinales en establecimientos especializados'),
('47732', 'Comercio al por menor de productos cosméticos y artículos de tocador en establecimientos especializados (excepto productos farmacéuticos y medicinales)'),
('4774', 'Comercio al por menor de otros productos nuevos en establecimientos especializados'),
('4775', 'Comercio al por menor de artículos de segunda mano'),
('47811', 'Comercio al por menor de alimentos en puestos de venta móviles'),
('47812', 'Comercio al por menor de bebidas y tabaco en puestos de venta móviles (excepto licores y cigarrillos)'),
('47813', 'Comercio al por menor de cigarrillos y licores en puestos de venta móviles'),
('4782', 'Comercio al por menor de productos textiles, prendas de vestir y calzado, en puestos de venta móviles'),
('4789', 'Comercio al por menor de otros productos en puestos de venta móviles'),
('47911', 'Comercio al por menor de alimentos y productos agrícolas en bruto; venta de textos escolares y libros (incluye cuadernos escolares); venta de drogas y medicamentos realizado a través de internet'),
('47912', 'Comercio al por menor y al por mayor de madera y materiales para construcción; venta de automotores (incluidas motocicletas) realizado a través de internet'),
('47913', 'Comercio al por menor de cigarrillos y licores; venta de combustibles derivados del petróleo y venta de joyas realizado a través de internet'),
('47914', 'Comercio al por menor de demás productos n.c.p. realizado a través de internet'),
('47921', 'Comercio al por menor de alimentos y productos agrícolas en bruto; venta de textos escolares y libros (incluye cuadernos escolares); venta de drogas y medicamentos realizado a través de casas de venta o por correo'),
('47922', 'Comercio al por menor y al por mayor de madera y materiales para construcción; venta de automotores (incluidas motocicletas) realizado a través de casas de venta o por correo'),
('47923', 'Comercio al por menor de cigarrillos y licores; venta de combustibles derivados del petróleo y venta de joyas realizado a través de casas de venta o por correo'),
('47924', 'Comercio al por menor de demás productos n.c.p. realizado a través de casas de venta o por correo'),
('47991', 'Otros tipos de comercio al por menor no realizado en establecimientos, puestos de venta o mercados de textos escolares y libros (incluye cuadernos escolares); venta de drogas y medicamentos'),
('47992', 'Otros tipos de comercio al por menor no realizado en establecimientos, puestos de venta o mercados de materiales para construcción; venta de automotores (incluidas motocicletas)'),
('47993', 'Otros tipos de comercio al por menor no realizado en establecimientos, puestos de venta o mercados de cigarrillos y licores; venta de combustibles derivados del petróleo y venta de joyas'),
('47994', 'Otros tipos de comercio al por menor no realizado en establecimientos, puestos de venta o mercados de demás productos n.c.p.'),
('4911', 'Transporte férreo de pasajeros'),
('4912', 'Transporte férreo de carga'),
('4921', 'Transporte de pasajeros'),
('4922', 'Transporte mixto'),
('4923', 'Transporte de carga por carretera'),
('4930', 'Transporte por tuberías'),
('5011', 'Transporte de pasajeros marítimo y de cabotaje'),
('5012', 'Transporte de carga\nmarítimo y de cabotaje'),
('5021', 'Transporte fluvial de pasajeros'),
('5022', 'Transporte fluvial de carga'),
('510', 'Extracción de hulla (carbón de piedra)'),
('5111', 'Transporte aéreo nacional de pasajeros'),
('5112', 'Transporte aéreo internacional de pasajeros'),
('5121', 'Transporte aéreo nacional de carga'),
('5122', 'Transporte aéreo internacional de carga'),
('520', 'Extracción de carbón lignito'),
('5210', 'Almacenamiento y depósito'),
('5221', 'Actividades de estaciones, vías y servicios complementarios para el transporte terrestre'),
('5222', 'Actividades de puertos y servicios complementarios para el transporte acuático'),
('5223', 'Actividades de aeropuertos, servicios de navegación aérea y demás actividades conexas al transporte aéreo'),
('5224', 'Manipulación de carga'),
('5229', 'Otras actividades complementarias al transporte'),
('5310', 'Actividades postales nacionales'),
('5320', 'Actividades de mensajería'),
('5330', 'Servicio de pedido, compra, distribución y entrega de productos a través de plataformas o aplicaciones de contacto y que utilizan una red de domiciliarios'),
('5511', 'Alojamiento en hoteles'),
('5512', 'Alojamiento en aparta-hoteles'),
('5513', 'Alojamiento en centros vacacionales'),
('5514', 'Alojamiento rural'),
('5519', 'Otros tipos de alojamientos para visitantes'),
('5520', 'Actividades de zonas de camping y parques para vehículos recreacionales'),
('5530', 'Servicio por horas de alojamiento'),
('5590', 'Otros tipos de alojamiento n.c.p.'),
('5611', 'Expendio a la mesa de comidas preparadas'),
('5612', 'Expendio por autoservicio de comidas preparadas'),
('5613', 'Expendio de comidas preparadas en cafeterías'),
('5619', 'Otros tipos de expendio de comidas preparadas n.c.p.'),
('5621', 'Catering para eventos'),
('5629', 'Actividades de otros servicios de comidas'),
('5630', 'Expendio de bebidas alcohólicas para el consumo dentro del establecimiento'),
('58111', 'Servicio de edición de libros'),
('58112', 'Edición y publicación de libros'),
('58113', 'Edición y publicación de libros (Tarifa especial para los contribuyentes que cumplen condiciones del Acuerdo 98 de 2003)'),
('5812', 'Edición de directorios y listas de correo'),
('5813', 'Edición de periódicos, revistas y otras publicaciones periódicas'),
('5819', 'Otros trabajos de edición'),
('5820', 'Edición de programas de informática (software)'),
('5911', 'Actividades de producción de películas cinematográficas, videos, programas, anuncios y comerciales de televisión (excepto programación de televisión)'),
('5912', 'Actividades de postproducción de películas cinematográficas, videos, programas, anuncios y comerciales de televisión (excepto programación de televisión)'),
('5913', 'Actividades de distribución de películas cinematográficas, videos, programas, anuncios y comerciales de televisión'),
('5914', 'Actividades de exhibición de películas cinematográficas y videos'),
('5920', 'Actividades de grabación de sonido y edición de música'),
('6010', 'Actividades de programación y transmisión en el servicio de radiodifusión sonora'),
('60201', 'Actividades de programación de televisión'),
('60202', 'Actividades de transmisión de televisión'),
('610', 'Extracción de petróleo crudo'),
('6110', 'Actividades de telecomunicaciones alámbricas'),
('6120', 'Actividades de telecomunicaciones inalámbricas'),
('6130', 'Actividades de telecomunicación satelital'),
('6190', 'Otras actividades de telecomunicaciones'),
('620', 'Extracción de gas natural'),
('6201', 'Actividades de desarrollo de sistemas informáticos (planificación, análisis, diseño, programación, pruebas)'),
('6202', 'Actividades de consultoría informática y actividades de administración de instalaciones informáticas'),
('6209', 'Otras actividades de tecnologías de información y actividades de servicios informáticos'),
('6311', 'Procesamiento de datos, alojamiento (hosting) y actividades relacionadas'),
('6312', 'Portales Web'),
('6391', 'Actividades de agencias de noticias'),
('6399', 'Otras actividades de servicio de información n.c.p.'),
('6411', 'Banca Central'),
('6412', 'Bancos comerciales'),
('6421', 'Actividades de las corporaciones financieras'),
('6422', 'Actividades de las compañías de financiamiento'),
('6423', 'Banca de segundo piso'),
('6424', 'Actividades de las cooperativas financieras'),
('6431', 'Fideicomisos, fondos y entidades financieras similares'),
('6491', 'Leasing financiero (arrendamiento financiero)'),
('6492', 'Actividades financieras de fondos de empleados y otras formas asociativas del sector solidario'),
('6493', 'Actividades de compra de cartera o factoring'),
('6494', 'Otras actividades de distribución de fondos'),
('6495', 'Instituciones especiales oficiales'),
('6496', 'Capitalización'),
('64991', 'Otras actividades de servicio financiero, excepto las de seguros y pensiones n.c.p.'),
('64992', 'Actividades comerciales de las casas de empeño o compraventa'),
('64993', 'Servicios de las casas de empeño o compraventas'),
('6511', 'Seguros generales'),
('6512', 'Seguros de vida'),
('6513', 'Reaseguros'),
('6515', 'Seguros de salud'),
('6521', 'Servicios de seguros sociales de salud'),
('6522', 'Servicios de seguros sociales en riesgos laborales'),
('6523', 'Servicios de seguros sociales en riesgos familia'),
('6531', 'Régimen de prima media con prestación definida (RPM)'),
('6532', 'Régimen de ahorro con solidaridad (RAIS)'),
('66111', 'Administración de mercados financieros (excepto actividades de las bolsas de valores)'),
('66112', 'Actividades de las bolsas de valores'),
('6612', 'Corretaje de valores y de contratos de productos básicos'),
('6613', 'Otras actividades relacionadas con el mercado de valores'),
('6614', 'Actividades de las sociedades de intermediación cambiaria y de servicios financieros especiales'),
('6615', 'Actividades de los profesionales de compra y venta de divisas'),
('6619', 'Otras actividades auxiliares de las actividades de servicios financieros n.c.p.'),
('6621', 'Actividades de agentes y corredores de seguros'),
('6629', 'Evaluación de riesgos y daños, y otras actividades de servicios auxiliares'),
('6630', 'Actividades de administración de fondos'),
('6810', 'Actividades inmobiliarias realizadas con bienes propios o arrendados'),
('6820', 'Actividades inmobiliarias realizadas a cambio de una retribución o por contrata'),
('69101', 'Actividades jurídicas como consultoría profesional'),
('69102', 'Actividades jurídicas en el ejercicio de una profesión liberal'),
('69201', 'Actividades de contabilidad, teneduría de libros, auditoría financiera y asesoría tributaria como consultoría profesional'),
('69202', 'Actividades de contabilidad, teneduría de libros, auditoría financiera y asesoría tributaria en el ejercicio de una profesión liberal'),
('70101', 'Actividades de administración empresarial como consultoría profesional'),
('70102', 'Actividades de administración empresarial en el ejercicio de una profesión liberal'),
('70201', 'Actividades de consultoría de gestión'),
('70202', 'Actividades de gestión en el ejercicio de una profesión liberal'),
('710', 'Extracción de minerales de hierro'),
('71111', 'Actividades de arquitectura'),
('71112', 'Actividades de arquitectura en ejercicio de una profesión liberal'),
('71121', 'Actividades de ingeniería y otras actividades conexas de consultoría técnica'),
('71122', 'Actividades de ingeniería y otras actividades conexas de consultoría técnica en ejercicio de una profesión liberal'),
('71201', 'Ensayos y análisis técnicos como consultoría profesional'),
('71202', 'Ensayos y análisis técnicos como consultoría profesional en el ejercicio de una profesión liberal'),
('721', 'Extracción de minerales de uranio y de torio'),
('72101', 'Investigaciones y desarrollo experimental en el campo de las ciencias naturales y la ingeniería como consultoría profesional'),
('72102', 'Investigaciones y desarrollo experimental en el campo de las ciencias naturales y la ingeniería en el ejercicio de una profesión liberal'),
('722', 'Extracción de oro y otros metales preciosos'),
('72201', 'Investigaciones y desarrollo experimental en el campo de las ciencias sociales y las humanidades como consultoría profesional'),
('72202', 'Investigaciones y desarrollo experimental en el campo de las ciencias sociales y las humanidades en el ejercicio de una profesión liberal'),
('723', 'Extracción de minerales de níquel'),
('729', 'Extracción de otros minerales metalíferos no ferrosos n.c.p.'),
('7310', 'Publicidad'),
('73201', 'Estudios de mercado y realización de encuestas de opinión pública como consultoría profesional'),
('73202', 'Estudios de mercado y realización de encuestas de opinión pública en el ejercicio de una profesión liberal'),
('74101', 'Actividades especializadas de diseño como consultoría profesional'),
('74102', 'Actividades especializadas de diseño en el ejercicio de una profesión liberal'),
('7420', 'Actividades de fotografía'),
('74901', 'Otras actividades profesionales, científicas y técnicas n.c.p. como consultoría profesional (incluye actividades de periodistas)'),
('74902', 'Otras actividades profesionales, científicas y técnicas n.c.p. en el ejercicio de una profesión liberal'),
('7500', 'Actividades veterinarias'),
('7710', 'Alquiler y arrendamiento de vehículos automotores'),
('7721', 'Alquiler y arrendamiento de equipo recreativo y deportivo'),
('7722', 'Alquiler de videos y discos'),
('7729', 'Alquiler y arrendamiento de otros efectos personales y enseres domésticos n.c.p.'),
('7730', 'Alquiler y arrendamiento de otros tipos de maquinaria, equipo y bienes tangibles n.c.p.'),
('7740', 'Arrendamiento de propiedad intelectual y productos similares, excepto obras protegidas por derechos de autor'),
('7810', 'Actividades de agencias de gestión y colocación de empleo'),
('7820', 'Actividades de empresas de servicios temporales'),
('7830', 'Otras actividades de provisión de talento humano'),
('7911', 'Actividades de las agencias de viaje'),
('7912', 'Actividades de operadores turísticos'),
('7990', 'Otros servicios de reserva y actividades relacionadas'),
('8010', 'Actividades de seguridad privada'),
('8020', 'Actividades de servicios de sistemas de seguridad'),
('8030', 'Actividades de detectives e investigadores privados'),
('811', 'Extracción de piedra, arena,\narcillas comunes, yeso y\nanhidrita'),
('8110', 'Actividades combinadas de apoyo a instalaciones'),
('812', 'Extracción de arcillas de uso industrial, caliza, caolín y bentonitas'),
('8121', 'Limpieza general interior de edificios'),
('8129', 'Otras actividades de limpieza de edificios e instalaciones industriales'),
('8130', 'Actividades de paisajismo y servicios de mantenimiento conexos'),
('820', 'Extracción de esmeraldas, piedras preciosas y semipreciosas'),
('8211', 'Actividades combinadas de servicios administrativos de oficina'),
('8219', 'Fotocopiado, preparación de documentos y otras actividades especializadas de apoyo a oficina'),
('8220', 'Actividades de centros de llamadas (Call center)'),
('8230', 'Organización de convenciones y eventos comerciales'),
('8291', 'Actividades de agencias de cobranza y oficinas de calificación crediticia'),
('8292', 'Actividades de envase y empaque'),
('8299', 'Otras actividades de servicio de apoyo a las empresas n.c.p.'),
('8411', 'Actividades legislativas de la administración pública'),
('8412', 'Actividades ejecutivas de la administración pública'),
('8413', 'Regulación de las actividades de organismos que prestan servicios de salud, educativos, culturales y otros servicios sociales, excepto servicios de seguridad social'),
('8414', 'Actividades reguladoras y facilitadoras de la actividad económica'),
('8415', 'Actividades de los órganos de control y otras instituciones.'),
('8421', 'Relaciones exteriores'),
('8422', 'Actividades de defensa'),
('8423', 'Orden público y actividades de seguridad publica'),
('8424', 'Administración de justicia'),
('8430', 'Actividades de planes de Seguridad Social de afiliación obligatoria'),
('8511', 'Educación de la primera infancia'),
('8512', 'Educación preescolar'),
('8513', 'Educación básica primaria'),
('8521', 'Educación básica secundaria'),
('8522', 'Educación media académica'),
('8523', 'Educación media técnica'),
('8530', 'Establecimientos que combinan diferentes niveles de educación inicial, preescolar, básica primaria, básica secundaria y media'),
('8541', 'Educación técnica profesional'),
('8542', 'Educación tecnológica'),
('8543', 'Educación de instituciones universitarias o de escuelas tecnológicas'),
('8544', 'Educación de universidades'),
('8551', 'Formación para el trabajo'),
('8552', 'Enseñanza deportiva y recreativa'),
('8553', 'Enseñanza cultural'),
('8559', 'Otros tipos de educación n.c.p.'),
('85591', 'Educación académica no formal (excepto programas de educación básica primaria, básica secundaria y media no gradual con fines de validación)'),
('85592', 'Educación académica no formal impartida mediante programas de educación básica primaria, básica secundaria y media no gradual con fines de validación'),
('8560', 'Actividades de apoyo a la educación'),
('8610', 'Actividades de hospitales y clínicas, con internación'),
('86211', 'Actividades de la práctica médica, sin internación (excepto actividades de promoción y prevención que realicen las entidades e instituciones promotoras y prestadoras de servicios de salud de naturaleza pública o privada, con recursos que provengan del Sistema General de Seguridad Social en Salud.)'),
('86221', 'Actividades de la práctica odontológica, sin internación (excepto actividades de promoción y prevención que realicen las entidades e instituciones promotoras y prestadoras de servicios de salud de naturaleza pública o privada, con recursos que provengan del Sistema General de Seguridad Social en Salud.)'),
('86911', 'Actividades de apoyo diagnóstico (excepto actividades de promoción y prevención que realicen las entidades e instituciones promotoras y prestadoras de servicios de salud de naturaleza pública o privada, con recursos que provengan del Sistema General de Seguridad Social en Salud.)'),
('86921', 'Actividades de apoyo terapéutico (excepto actividades de promoción y prevención que realicen las entidades e instituciones promotoras y prestadoras de servicios de salud de naturaleza pública o privada, con recursos que provengan del Sistema General de Seguridad Social en Salud.)'),
('86991', 'Otras actividades de atención de la salud humana (excepto actividades de promoción y prevención que realicen las entidades e instituciones promotoras y prestadoras de servicios de salud de naturaleza pública o privada, con recursos que provengan del Sistema General de Seguridad Social en Salud.)'),
('87101', 'Actividades de atención residencial medicalizada de tipo general (excepto actividades de promoción y prevención que realicen las entidades e instituciones promotoras y prestadoras de servicios de salud de naturaleza pública o privada, con recursos que provengan del Sistema General de Seguridad Social en Salud.)'),
('8720', 'Actividades de atención residencial, para el cuidado de pacientes con retardo mental, enfermedad mental y consumo de sustancias psicoactivas'),
('8730', 'Actividades de atención en instituciones para el cuidado de personas mayores y/o discapacitadas'),
('8790', 'Otras actividades de atención en instituciones con alojamiento'),
('8810', 'Actividades de asistencia social sin alojamiento para personas mayores y discapacitadas'),
('8891', 'Actividades de guarderías para niños y niñas'),
('8899', 'Otras actividades de asistencia social n.c.p'),
('891', 'Extracción de minerales para la fabricación de abonos y productos químicos'),
('892', 'Extracción de halita (sal)'),
('899', 'Extracción de otros minerales no metálicos n.c.p.'),
('9001', 'Creación literaria'),
('9002', 'Creación musical'),
('9003', 'Creación teatral'),
('9004', 'Creación audiovisual'),
('9005', 'Artes plásticas y visuales'),
('9006', 'Actividades teatrales'),
('9007', 'Actividades de espectáculos musicales en vivo'),
('9008', 'Otras actividades de espectáculos en vivo n.c.p'),
('910', 'Actividades de apoyo para la extracción de petróleo y de gas natural'),
('9101', 'Actividades de Bibliotecas y archivos'),
('9102', 'Actividades y funcionamiento de museos, conservación de edificios y sitios históricos'),
('9103', 'Actividades de jardines botánicos, zoológicos y reservas naturales'),
('92001', 'Actividades de juegos de destreza, habilidad, conocimiento y fuerza'),
('9311', 'Gestión de instalaciones deportivas'),
('9312', 'Actividades de clubes deportivos'),
('9319', 'Otras actividades deportivas'),
('9321', 'Actividades de parques de atracciones y parques temáticos'),
('93291', 'Otras actividades recreativas y de esparcimiento n.c.p. (excepto juegos de suerte y azar, discotecas y similares )'),
('9411', 'Actividades de asociaciones empresariales y de empleadores'),
('9412', 'Actividades de asociaciones profesionales y gremiales sin ánimo de lucro'),
('9420', 'Actividades de sindicatos'),
('9491', 'Actividades de asociaciones religiosas'),
('9492', 'Actividades de partidos políticos'),
('9499', 'Actividades de otras asociaciones n.c.p.'),
('9511', 'Mantenimiento y reparación de computadores y de equipo periférico'),
('9512', 'Mantenimiento y reparación de equipos de comunicación'),
('9521', 'Mantenimiento y reparación de aparatos electrónicos de consumo'),
('9522', 'Mantenimiento y reparación de aparatos domésticos y equipos domésticos y de jardinería'),
('9523', 'Reparación de calzado y artículos de cuero'),
('9524', 'Reparación de muebles y accesorios para el hogar'),
('9529', 'Mantenimiento y reparación de otros efectos personales y enseres domésticos'),
('9601', 'Lavado y limpieza, incluso la limpieza en seco, de productos textiles y de piel'),
('9602', 'Peluquería y otros tratamientos de belleza'),
('9603', 'Pompas fúnebres y actividades relacionadas'),
('9609', 'Otras actividades de servicios personales n.c.p.'),
('9700', 'Actividades de los hogares individuales como empleadores de personal doméstico'),
('9810', 'Actividades no diferenciadas de los hogares individuales como productores de bienes para uso propio'),
('9820', 'Actividades no diferenciadas de los hogares individuales como productores de servicios para uso propio'),
('990', 'Actividades de apoyo para otras actividades de explotación de minas y canteras'),
('9900', 'Actividades de organizaciones y entidades extraterritoriales signatarios de la Convención de Viena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afectacion`
--

CREATE TABLE `afectacion` (
  `VcrIdAfe` varchar(12) NOT NULL,
  `VcrAfe` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `afectacion`
--

INSERT INTO `afectacion` (`VcrIdAfe`, `VcrAfe`) VALUES
('8001013801', 'Sin perdidas'),
('8001013802', 'Pérdida parcial'),
('8001013803', 'Pérdida total'),
('8001013804', 'S/A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appgini_query_log`
--

CREATE TABLE `appgini_query_log` (
  `datetime` timestamp NOT NULL DEFAULT current_timestamp(),
  `statement` longtext DEFAULT NULL,
  `duration` decimal(10,2) UNSIGNED DEFAULT 0.00,
  `error` text DEFAULT NULL,
  `memberID` varchar(200) DEFAULT NULL,
  `uri` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barrios`
--

CREATE TABLE `barrios` (
  `VcrIdBarVe` varchar(10) NOT NULL,
  `VcrBarVer` varchar(40) DEFAULT NULL,
  `VcrIdCom` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `barrios`
--

INSERT INTO `barrios` (`VcrIdBarVe`, `VcrBarVer`, `VcrIdCom`) VALUES
('1001', 'El Dorado', '10'),
('1002', 'El Guabal', '10'),
('1003', 'La Libertad', '10'),
('1004', 'Santa Elena', '10'),
('1005', 'Las Acacias', '10'),
('1006', 'Santo Domingo', '10'),
('1007', 'Jorge Zawadsky', '10'),
('1008', 'Olímpico', '10'),
('1009', 'Cristóbal Colón', '10'),
('101', 'Terrón Colorado', '1'),
('1010', 'La Selva', '10'),
('1011', 'Barrio Departamental', '10'),
('1012', 'Pasoancho', '10'),
('1013', 'Panamericano', '10'),
('1014', 'Colseguros Andes', '10'),
('1015', 'San Cristobal', '10'),
('1016', 'Las Granjas', '10'),
('1017', 'San Judas Tadeo I Etapa', '10'),
('1018', 'San Judas Tadeo II Etapa', '10'),
('102', 'Vista Hermosa', '1'),
('1101', 'San Carlos', '11'),
('1102', 'Maracaibo', '11'),
('1103', 'La Independencia', '11'),
('1104', 'La Esperanza', '11'),
('1105', 'Urbanización Boyacá', '11'),
('1106', 'El Jardín', '11'),
('1107', 'La Fortaleza', '11'),
('1108', 'El Recuerdo', '11'),
('1109', 'Aguablanca', '11'),
('1110', 'El Prado', '11'),
('1111', '20 de Julio', '11'),
('1112', 'Prados de Oriente', '11'),
('1113', 'Los Sauces', '11'),
('1114', 'Villa del Sur', '11'),
('1115', 'José Holguín Garcés', '11'),
('1116', 'León XIII', '11'),
('1117', 'José María Córdoba', '11'),
('1118', 'San Pedro Claver', '11'),
('1119', 'Los Conquistadores', '11'),
('1120', 'La Gran Colombia', '11'),
('1121', 'San Benito', '11'),
('1122', 'Primavera', '11'),
('1201', 'Villanueva', '12'),
('1202', 'Asturias', '12'),
('1203', 'Eduardo Santos', '12'),
('1204', 'Alfonso Barberena A.', '12'),
('1205', 'El Paraiso', '12'),
('1206', 'Fenalco Kennedy', '12'),
('1207', 'Nueva Floresta', '12'),
('1208', 'Julio Rincón', '12'),
('1209', 'Doce de Octubre', '12'),
('1210', 'El Rodeo', '12'),
('1211', 'Sindical', '12'),
('1212', 'Bello Horizonte', '12'),
('1301', 'Ulpiano Lloreda', '13'),
('1302', 'El Vergel', '13'),
('1303', 'El Poblado I', '13'),
('1304', 'El Poblado II', '13'),
('1305', 'Los Comuneros Segunda Etapa', '13'),
('1306', 'Ricardo Balcázar', '13'),
('1307', 'Omar Torrijos', '13'),
('1308', 'El Diamante', '13'),
('1309', 'Lleras Restrepo', '13'),
('1310', 'Villa del Lago', '13'),
('1311', 'Los Robles', '13'),
('1312', 'Rodrigo Lara Bonilla', '13'),
('1313', 'Charco Azul', '13'),
('1314', 'Villablanca', '13'),
('1315', 'Calipso', '13'),
('1390', 'Yira Castro', '13'),
('1393', 'Lleras Restrepo II Etapa', '13'),
('1394', 'Marroquín III', '13'),
('1395', 'Los Lagos', '13'),
('1397', 'Sector Laguna del Pondaje', '13'),
('1398', 'El Pondaje', '13'),
('1399', 'Sector Asprosocial-Diamante', '13'),
('1401', 'Alfonso Bonilla Aragón', '14'),
('1402', 'Alirio Mora Beltrán', '14'),
('1403', 'Manuela Beltrán', '14'),
('1404', 'Las Orquídeas', '14'),
('1405', 'José Manuel Marroquín Segunda Etapa', '14'),
('1406', 'José Manuel Marroquín Primera Etapa', '14'),
('1495', 'Puerta del Sol', '14'),
('1496', 'Los Naranjos I', '14'),
('1498', 'Promociones Populares B', '14'),
('1499', 'Los Naranjos II', '14'),
('1501', 'El Retiro', '15'),
('1502', 'Comuneros I', '15'),
('1503', 'Laureano Gómez', '15'),
('1504', 'El Vallado', '15'),
('1596', 'Ciudad Cordoba', '15'),
('1598', 'Mojica', '15'),
('1599', 'El Morichal', '15'),
('1601', 'Mariano Ramos', '16'),
('1602', 'República de Israel', '16'),
('1603', 'Unión de Vivienda Popular', '16'),
('1604', 'Antonio Nariño', '16'),
('1605', 'Brisas del Limonar', '16'),
('1696', 'Área desocupada', '16'),
('1697', 'Ciudad 2000', '16'),
('1698', 'La Alborada', '16'),
('1701', 'La Playa', '17'),
('1702', 'Primero de Mayo', '17'),
('1703', 'Ciudadela Comfandi', '17'),
('1705', 'Ciudad Universitaria', '17'),
('1774', 'Caney', '17'),
('1775', 'Lili', '17'),
('1778', 'Santa Anita - La Selva', '17'),
('1780', 'El Ingenio', '17'),
('1781', 'Mayapan - Las Vegas', '17'),
('1782', 'Las Quintas de Don Simón', '17'),
('1783', 'Ciudad Capri', '17'),
('1784', 'La Hacienda', '17'),
('1785', 'Los Portales - Nuevo Rey', '17'),
('1786', 'Cañaverales - Los Samanes', '17'),
('1787', 'El Limonar', '17'),
('1788', 'Bosques del Limonar', '17'),
('1789', 'El Gran Limonar - Cataya', '17'),
('1790', 'El Gran Limonar', '17'),
('1791', 'Unicentro Cali', '17'),
('1793', 'Ciudadela Pasoancho', '17'),
('1794', 'Prados del Limonar', '17'),
('1796', 'Urbanización San Joaquin', '17'),
('1801', 'Buenos Aires', '18'),
('1802', 'Barrio Caldas', '18'),
('1803', 'Los Chorros', '18'),
('1804', 'Meléndez', '18'),
('1805', 'Los Farallones', '18'),
('1807', 'Francisco Eladio Ramirez', '18'),
('1808', 'Prados del Sur', '18'),
('1809', 'Horizontes', '18'),
('1810', 'Mario Correa Rengifo', '18'),
('1811', 'Lourdes', '18'),
('1812', 'Colinas del Sur', '18'),
('1813', 'Alférez Real', '18'),
('1814', 'Nápoles', '18'),
('1815', 'El Jordán', '18'),
('1816', 'Cuarteles Napoles', '18'),
('1890', 'Sector Alto de Los Chorros', '18'),
('1891', 'Polvorines', '18'),
('1896', 'Sector Meléndez', '18'),
('1897', 'Sector Alto Jordán', '18'),
('1898', 'Alto Nápoles', '18'),
('1901', 'El Refugio', '19'),
('1902', 'La Cascada', '19'),
('1903', 'El Lido', '19'),
('1904', 'Urbanización Tequendama', '19'),
('1905', 'Barrio Eucarístico', '19'),
('1906', 'San Fernando Nuevo', '19'),
('1907', 'Urbanización Nueva Granada', '19'),
('1908', 'Santa Isabel', '19'),
('1909', 'Bellavista', '19'),
('1910', 'San Fernando Viejo', '19'),
('1911', 'Miraflores', '19'),
('1912', '3 de Julio', '19'),
('1913', 'El Cedro', '19'),
('1914', 'Champagñat', '19'),
('1915', 'Urbanización Colseguros', '19'),
('1916', 'Los Cambulos', '19'),
('1917', 'El Mortiñal', '19'),
('1918', 'Urbanización Militar', '19'),
('1919', 'Cuarto de Legua - Guadalupe', '19'),
('1921', 'Nueva Tequendama', '19'),
('1922', 'Camino Real - Joaquín Borrero Sinisterra', '19'),
('1923', 'Camino Real - Los Fundadores', '19'),
('196', 'Sector Patio Bonito', '1'),
('1981', 'Altos de Santa Isabel - La Morelia', '19'),
('1982', 'Santa Barbara', '19'),
('1983', 'Tejares - Cristales', '19'),
('1984', 'Unidad Residencial Santiago de Cali', '19'),
('1985', 'Unidad Residencial El Coliseo', '19'),
('1988', 'Cañaveralejo - Seguros Patria', '19'),
('199', 'Aguacatal', '1'),
('1992', 'Cañaveral', '19'),
('1994', 'Pampa Linda', '19'),
('1995', 'Sector Cañaveralejo Guadalupe Antigua', '19'),
('1999', 'U.D. Alberto Galindo - Plaza de Toros', '19'),
('2001', 'El Cortijo', '20'),
('2002', 'Belisario Caicedo', '20'),
('2003', 'Siloé', '20'),
('2004', 'Lleras Camargo', '20'),
('2005', 'Belén', '20'),
('2006', 'Brisas de Mayo', '20'),
('2007', 'Tierra Blanca', '20'),
('2008', 'Pueblo Joven', '20'),
('201', 'Santa Rita', '2'),
('202', 'Santa Teresita', '2'),
('203', 'Arboledas', '2'),
('204', 'Normandía', '2'),
('205', 'Juanambú', '2'),
('206', 'Centenario', '2'),
('207', 'Granada', '2'),
('208', 'Versalles', '2'),
('209', 'San Vicente', '2'),
('2097', 'Carabineros', '20'),
('2098', 'Venezuela - Urbanización Cañaveralejo', '20'),
('2099', 'La Sultana', '20'),
('210', 'Santa Mónica', '2'),
('2101', 'Pízamos I', '21'),
('2102', 'Pízamos II', '21'),
('2103', 'Calimio Desepaz', '21'),
('2104', 'El Remanso', '21'),
('2105', 'Los Líderes', '21'),
('2106', 'Desepaz Invicali', '21'),
('2107', 'Compartir', '21'),
('2108', 'Ciudad Talanga', '21'),
('211', 'Prados del Norte', '2'),
('212', 'La Flora', '2'),
('213', 'La Campiña', '2'),
('214', 'La Paz', '2'),
('215', 'El Bosque', '2'),
('216', 'Menga', '2'),
('217', 'Ciudad Los Alamos', '2'),
('218', 'Chipichape', '2'),
('219', 'Brisas de los Alamos', '2'),
('2194', 'Villamercedes I - Villa Luz - Las Garzas', '21'),
('2195', 'Pízamos III - Las Dalias', '21'),
('2196', 'Potrero Grande', '21'),
('2197', 'Ciudadela del Río', '21'),
('2198', 'Valle Grande', '21'),
('2199', 'Planta de Tratamiento', '21'),
('2201', 'Urbanización Ciudad Jardín', '22'),
('2296', 'Parcelaciones Pance', '22'),
('2297', 'Urbanización Río Lili', '22'),
('2298', 'Ciudad Campestre', '22'),
('2299', 'Club Campestre', '22'),
('293', 'Urbanización La Merced', '2'),
('294', 'Vipasa', '2'),
('295', 'Urbanización La Flora', '2'),
('296', 'Altos de Menga', '2'),
('298', 'Area en desarrollo - Parque del Amor', '2'),
('301', 'El Nacional', '3'),
('302', 'El Peñón', '3'),
('303', 'San Antonio', '3'),
('304', 'San Cayetano', '3'),
('305', 'Los Libertadores', '3'),
('306', 'San Juan Bosco', '3'),
('307', 'Santa Rosa', '3'),
('308', 'La Merced', '3'),
('309', 'San Pascual', '3'),
('310', 'El Calvario', '3'),
('311', 'San Pedro', '3'),
('312', 'San Nicolas', '3'),
('313', 'El Hoyo', '3'),
('314', 'El Piloto', '3'),
('315', 'Navarro - La Chanca', '3'),
('401', 'Jorge Isaacs', '4'),
('402', 'Santander', '4'),
('403', 'Porvenir', '4'),
('404', 'Las Delicias', '4'),
('405', 'Manzanares', '4'),
('406', 'Salomia', '4'),
('407', 'Fátima', '4'),
('408', 'Sultana - Berlín - San Francisco', '4'),
('410', 'Popular', '4'),
('411', 'Ignacio Rengifo', '4'),
('412', 'Guillermo Valencia', '4'),
('413', 'La Isla', '4'),
('414', 'Marco Fidel Suárez', '4'),
('415', 'Evaristo García', '4'),
('416', 'La Esmeralda', '4'),
('417', 'Bolivariano', '4'),
('418', 'Olaya Herrera', '4'),
('419', 'Unidad Residencial Bueno Madrid', '4'),
('420', 'Flora Industrial', '4'),
('421', 'Calima', '4'),
('423', 'Industria de Licores', '4'),
('497', 'La Alianza', '4'),
('501', 'El Sena', '5'),
('502', 'Los Andes', '5'),
('503', 'Los Guayacanes', '5'),
('504', 'Chiminangos Segunda Etapa', '5'),
('505', 'Chiminangos Primera Etapa', '5'),
('506', 'Metropolitano del Norte', '5'),
('594', 'Los Parques - Barranquilla', '5'),
('595', 'Villa del Sol', '5'),
('596', 'Paseo de Los Almendros', '5'),
('597', 'Los Andes B - La Riviera', '5'),
('598', 'Torres de Comfandi', '5'),
('599', 'Villa del Prado - El Guabito', '5'),
('601', 'San Luis', '6'),
('602', 'Jorge Eliecer Gaitán', '6'),
('603', 'Paso del Comercio', '6'),
('604', 'Los Alcázares', '6'),
('605', 'Petecuy Primera Etapa', '6'),
('606', 'Petecuy Segunda Etapa', '6'),
('607', 'La Rivera Primera Etapa', '6'),
('608', 'Los Guaduales', '6'),
('609', 'Petecuy Tercera Etapa', '6'),
('610', 'Ciudadela Floralia', '6'),
('695', 'Fonaviemcali', '6'),
('696', 'San Luís II', '6'),
('697', 'Urbanización Calimio', '6'),
('698', 'Sector Puente del Comercio', '6'),
('701', 'Alfonso López P. 1a. Etapa', '7'),
('702', 'Alfonso López P. 2a. Etapa', '7'),
('703', 'Alfonso López P. 3a. Etapa', '7'),
('704', 'Puerto Nuevo', '7'),
('705', 'Puerto Mallarino', '7'),
('706', 'Urbanización El Ángel del Hogar', '7'),
('707', 'Siete de Agosto', '7'),
('708', 'Los Pinos', '7'),
('709', 'San Marino', '7'),
('710', 'Las Ceibas', '7'),
('711', 'Base Aérea', '7'),
('797', 'Parque de la Caña', '7'),
('798', 'Fepicol', '7'),
('801', 'Primitivo Crespo', '8'),
('802', 'Simón Bolívar', '8'),
('803', 'Saavedra Galindo', '8'),
('804', 'Uribe Uribe', '8'),
('805', 'Santa Mónica Popular', '8'),
('806', 'La Floresta', '8'),
('807', 'Benjamín Herrera', '8'),
('808', 'Municipal', '8'),
('809', 'Industrial', '8'),
('810', 'El Troncal', '8'),
('811', 'Las Américas', '8'),
('812', 'Atanasio Girardot', '8'),
('813', 'Santa Fe', '8'),
('814', 'Chapinero', '8'),
('815', 'Villa Colombia', '8'),
('816', 'EL Trébol', '8'),
('817', 'La Base', '8'),
('818', 'Urbanización La Nueva Base', '8'),
('901', 'Alameda', '9'),
('902', 'Bretaña', '9'),
('903', 'Junín', '9'),
('904', 'Guayaquil', '9'),
('905', 'Aranjuez', '9'),
('906', 'Manuel María Buenaventura', '9'),
('907', 'Santa Mónica Belalcázar', '9'),
('908', 'Belalcázar', '9'),
('909', 'Sucre', '9'),
('910', 'Barrio Obrero', '9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `capacidad_reducida`
--

CREATE TABLE `capacidad_reducida` (
  `VcrIdCap` varchar(12) NOT NULL,
  `VcrCap` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `capacidad_reducida`
--

INSERT INTO `capacidad_reducida` (`VcrIdCap`, `VcrCap`) VALUES
('8001012901', 'Cognitiva'),
('8001012902', 'Motriz'),
('8001012903', 'Sensorial'),
('8001012904', 'Sin asignar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caracteristicas_evento`
--

CREATE TABLE `caracteristicas_evento` (
  `VcrIdCar` varchar(12) NOT NULL,
  `VcrCarFen` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `caracteristicas_evento`
--

INSERT INTO `caracteristicas_evento` (`VcrIdCar`, `VcrCarFen`) VALUES
('8001012601', 'Atmosférico'),
('8001012602', 'Hidrológico'),
('8001012603', 'Geológico'),
('8001012604', 'Inundacion socio_natural'),
('8001012605', 'Movimiento en masa socio-natural'),
('8001012606', 'Movimiento en masa'),
('8001012607', 'Lesiones en la construccion'),
('8001012608', 'Inadecuada disposicion de residuos RS y RCD'),
('8001012609', 'Quimico'),
('8001012610', 'Electrico'),
('8001012611', 'Mecanico'),
('8001012612', 'Termico'),
('8001012613', 'Vertimientos'),
('8001012614', 'Plagas'),
('8001012615', 'Silvicultura'),
('8001012616', 'Evento fortuito'),
('8001012617', 'Otro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificacion_kit`
--

CREATE TABLE `clasificacion_kit` (
  `VcrIdKit` varchar(7) DEFAULT NULL,
  `VcrNomKit` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `clasificacion_kit`
--

INSERT INTO `clasificacion_kit` (`VcrIdKit`, `VcrNomKit`) VALUES
('integer', 'varchar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `VcrIdCom` varchar(12) NOT NULL,
  `VcrCom` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comunas`
--

INSERT INTO `comunas` (`VcrIdCom`, `VcrCom`) VALUES
('8001012001', 'Comuna 1'),
('8001012002', 'Comuna 2'),
('8001012003', 'Comuna 3'),
('8001012004', 'Comuna 4'),
('8001012005', 'Comuna 5'),
('8001012006', 'Comuna 6'),
('8001012007', 'Comuna 7'),
('8001012008', 'Comuna 8'),
('8001012009', 'Comuna 9'),
('8001012010', 'Comuna 10'),
('8001012011', 'Comuna 11'),
('8001012012', 'Comuna 12'),
('8001012013', 'Comuna 13'),
('8001012014', 'Comuna 14'),
('8001012015', 'Comuna 15'),
('8001012016', 'Comuna 16'),
('8001012017', 'Comuna 17'),
('8001012018', 'Comuna 18'),
('8001012019', 'Comuna 19'),
('8001012020', 'Comuna 20'),
('8001012021', 'Comuna 21'),
('8001012022', 'Comuna 22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `corregimientos`
--

CREATE TABLE `corregimientos` (
  `VcrIdCorr` varchar(12) NOT NULL,
  `VcrCorr` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `corregimientos`
--

INSERT INTO `corregimientos` (`VcrIdCorr`, `VcrCorr`) VALUES
('8001012023', 'Navarro'),
('8001012024', 'El Hormiguero'),
('8001012025', 'Pance'),
('8001012026', 'La Buitrera'),
('8001012027', 'Villacarmelo'),
('8001012028', 'Los Andes'),
('8001012029', 'Pichindé'),
('8001012030', 'La Leonera'),
('8001012031', 'Felidia'),
('8001012032', 'El Saladito'),
('8001012033', 'La Elvira'),
('8001012034', 'La Castilla'),
('8001012035', 'La Paz'),
('8001012036', 'Montebello'),
('8001012037', 'Golondrinas'),
('8001012038', 'Suelo en Expansión'),
('8001012039', 'No Asignado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dependencias`
--

CREATE TABLE `dependencias` (
  `VcrId` int(10) UNSIGNED NOT NULL,
  `VcrIdTra` varchar(12) DEFAULT NULL,
  `VcrTra` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `dependencias`
--

INSERT INTO `dependencias` (`VcrId`, `VcrIdTra`, `VcrTra`) VALUES
(1, '800140625', 'Policia metropolitana Santiago de Cali'),
(2, '890306215', 'Cruz roja colombiana seccional Valle del Cauca'),
(3, '890399000', 'Benemerito cuerpo de bomberos voluntarios de Cali'),
(4, '890399011-3', 'Secretaria Infraestructura'),
(5, '890399011-3', 'Secretaria de Vivienda, Social y Habitat'),
(6, '890399011-3', 'Secretaria Seguridad y Justicia'),
(7, '890399011-3', 'Secretaria de Bienestar Social'),
(8, '890399011-3', 'Proyecto Plan Jarillon - Secretaria Gestion del Riesgo'),
(9, '890399002-7', 'CVC'),
(10, '890399003-4', 'EMCALI'),
(11, '890399011-3', 'DAGMA'),
(12, '890399011-3', 'UAESPM'),
(13, '890399011-3', 'Subsecretaria de Inspeccion, Vigilancia y Control'),
(14, '8001676435', 'Gases de Occidente'),
(15, '890399011-3', 'SEPOU'),
(16, '890399011-3', 'Secretaria de Desarrollo Economico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edificacion`
--

CREATE TABLE `edificacion` (
  `VcrIdEdi` varchar(12) NOT NULL,
  `VcrEdi` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `edificacion`
--

INSERT INTO `edificacion` (`VcrIdEdi`, `VcrEdi`) VALUES
('8001014001', 'Residencial'),
('8001014002', 'Comercial'),
('8001014003', 'Equipamiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_edificacion`
--

CREATE TABLE `estado_edificacion` (
  `CODIGO` varchar(9) DEFAULT NULL,
  `NOMBRE` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `estado_edificacion`
--

INSERT INTO `estado_edificacion` (`CODIGO`, `NOMBRE`) VALUES
('VcrIdEstE', 'VcrEstEdi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fenomenos`
--

CREATE TABLE `fenomenos` (
  `VcrIdFen` varchar(12) NOT NULL,
  `VcrFen` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fenomenos`
--

INSERT INTO `fenomenos` (`VcrIdFen`, `VcrFen`) VALUES
('8001012501', 'De origen natural'),
('8001012502', 'De origen socio_natural'),
('8001012503', 'De origen tecnológico'),
('8001012504', 'De origen humano'),
('8001012505', 'De origen biológico'),
('8001012506', 'Concatenados'),
('8001012507', 'Sin asignar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `firmas`
--

CREATE TABLE `firmas` (
  `idfirma` int(10) UNSIGNED NOT NULL,
  `id` int(10) UNSIGNED DEFAULT NULL,
  `Imagen` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fuente_riesgo`
--

CREATE TABLE `fuente_riesgo` (
  `VcrIdFte` varchar(12) NOT NULL,
  `VcrFte` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fuente_riesgo`
--

INSERT INTO `fuente_riesgo` (`VcrIdFte`, `VcrFte`) VALUES
('1', 'Comercial'),
('2', 'Servicios'),
('3', 'Industriales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lesiones`
--

CREATE TABLE `lesiones` (
  `VcrIdLes` varchar(12) NOT NULL,
  `VcrLesEst` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lesiones`
--

INSERT INTO `lesiones` (`VcrIdLes`, `VcrLesEst`) VALUES
('1', 'Fisuras'),
('2', 'Grietas'),
('3', 'Fracturas'),
('4', 'Asentamientos diferenciales'),
('5', 'Sin lesiones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membership_grouppermissions`
--

CREATE TABLE `membership_grouppermissions` (
  `permissionID` int(10) UNSIGNED NOT NULL,
  `groupID` int(10) UNSIGNED DEFAULT NULL,
  `tableName` varchar(100) DEFAULT NULL,
  `allowInsert` tinyint(4) NOT NULL DEFAULT 0,
  `allowView` tinyint(4) NOT NULL DEFAULT 0,
  `allowEdit` tinyint(4) NOT NULL DEFAULT 0,
  `allowDelete` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `membership_grouppermissions`
--

INSERT INTO `membership_grouppermissions` (`permissionID`, `groupID`, `tableName`, `allowInsert`, `allowView`, `allowEdit`, `allowDelete`) VALUES
(1, 2, 'natural', 1, 3, 3, 3),
(2, 2, 'tipo_documento', 1, 3, 3, 3),
(3, 2, 'motivo_visita', 1, 3, 3, 3),
(4, 2, 'barrios', 1, 3, 3, 3),
(5, 2, 'comunas', 1, 3, 3, 3),
(6, 2, 'fenomenos', 1, 3, 3, 3),
(7, 2, 'caracteristicas_evento', 1, 3, 3, 3),
(8, 2, 'tipo_material', 1, 3, 3, 3),
(9, 2, 'lesiones', 1, 3, 3, 3),
(10, 2, 'capacidad_reducida', 1, 3, 3, 3),
(11, 2, 'servidor_publico', 1, 3, 3, 3),
(12, 2, 'fuente_riesgo', 1, 3, 3, 3),
(13, 2, 'corregimientos', 1, 3, 3, 3),
(14, 2, 'dependencias', 1, 3, 3, 3),
(15, 2, 'solicitudes', 1, 3, 3, 3),
(16, 2, 'municipios', 1, 3, 3, 3),
(17, 2, 'afectacion', 1, 3, 3, 3),
(18, 2, 'edificacion', 1, 3, 3, 3),
(19, 2, 'tipo_combustible', 1, 3, 3, 3),
(20, 2, 'ubicacion', 1, 3, 3, 3),
(21, 2, 'tipo_evento', 1, 3, 3, 3),
(22, 2, 'actividad_economica', 1, 3, 3, 3),
(23, 2, 'usuarios', 1, 3, 3, 3),
(24, 2, 'procesos', 1, 3, 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membership_groups`
--

CREATE TABLE `membership_groups` (
  `groupID` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `allowSignup` tinyint(4) DEFAULT NULL,
  `needsApproval` tinyint(4) DEFAULT NULL,
  `allowCSVImport` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `membership_groups`
--

INSERT INTO `membership_groups` (`groupID`, `name`, `description`, `allowSignup`, `needsApproval`, `allowCSVImport`) VALUES
(1, 'anonymous', 'Anonymous group created automatically on 2023-02-27', 0, 0, 0),
(2, 'Admins', 'Admin group created automatically on 2023-02-27', 0, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membership_userpermissions`
--

CREATE TABLE `membership_userpermissions` (
  `permissionID` int(10) UNSIGNED NOT NULL,
  `memberID` varchar(100) NOT NULL,
  `tableName` varchar(100) DEFAULT NULL,
  `allowInsert` tinyint(4) NOT NULL DEFAULT 0,
  `allowView` tinyint(4) NOT NULL DEFAULT 0,
  `allowEdit` tinyint(4) NOT NULL DEFAULT 0,
  `allowDelete` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membership_userrecords`
--

CREATE TABLE `membership_userrecords` (
  `recID` bigint(20) UNSIGNED NOT NULL,
  `tableName` varchar(100) DEFAULT NULL,
  `pkValue` varchar(255) DEFAULT NULL,
  `memberID` varchar(100) DEFAULT NULL,
  `dateAdded` bigint(20) UNSIGNED DEFAULT NULL,
  `dateUpdated` bigint(20) UNSIGNED DEFAULT NULL,
  `groupID` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `membership_userrecords`
--

INSERT INTO `membership_userrecords` (`recID`, `tableName`, `pkValue`, `memberID`, `dateAdded`, `dateUpdated`, `groupID`) VALUES
(1, 'natural', '41630101424-01-', 'jacaraba', 1676090913, 1676090913, 2),
(2, 'natural', '41630101424-01-02', 'basico', 1676092523, 1676092523, 9),
(3, 'visita', '1', 'jacaraba', 1676240671, 1676240671, 2),
(4, 'visita', '2', 'jacaraba', 1676251418, 1676251549, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membership_users`
--

CREATE TABLE `membership_users` (
  `memberID` varchar(100) NOT NULL,
  `passMD5` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `signupDate` date DEFAULT NULL,
  `groupID` int(10) UNSIGNED DEFAULT NULL,
  `isBanned` tinyint(4) DEFAULT NULL,
  `isApproved` tinyint(4) DEFAULT NULL,
  `custom1` text DEFAULT NULL,
  `custom2` text DEFAULT NULL,
  `custom3` text DEFAULT NULL,
  `custom4` text DEFAULT NULL,
  `comments` text DEFAULT NULL,
  `pass_reset_key` varchar(100) DEFAULT NULL,
  `pass_reset_expiry` int(10) UNSIGNED DEFAULT NULL,
  `flags` text DEFAULT NULL,
  `allowCSVImport` tinyint(4) NOT NULL DEFAULT 0,
  `data` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `membership_users`
--

INSERT INTO `membership_users` (`memberID`, `passMD5`, `email`, `signupDate`, `groupID`, `isBanned`, `isApproved`, `custom1`, `custom2`, `custom3`, `custom4`, `comments`, `pass_reset_key`, `pass_reset_expiry`, `flags`, `allowCSVImport`, `data`) VALUES
('guest', NULL, NULL, '2023-02-27', 1, 0, 1, NULL, NULL, NULL, NULL, 'Anonymous member created automatically on 2023-02-27', NULL, NULL, NULL, 0, NULL),
('jacaraba', '$2y$10$meb4uH52.0xHd6ITqmFCt.uTG496P9EzvLuLV//HZ0HCnNgXVGUei', 'jacaraba@hotmail.com', '2023-02-27', 2, 0, 1, NULL, NULL, NULL, NULL, 'Admin member created automatically on 2023-02-27', NULL, NULL, NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `membership_usersessions`
--

CREATE TABLE `membership_usersessions` (
  `memberID` varchar(100) NOT NULL,
  `token` varchar(100) NOT NULL,
  `agent` varchar(100) NOT NULL,
  `expiry_ts` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `membership_usersessions`
--

INSERT INTO `membership_usersessions` (`memberID`, `token`, `agent`, `expiry_ts`) VALUES
('jacaraba', 'DQlO4rA9DPSF2iWhsdg3OYcRUGV89t', 'Owewor3TvKbvsvvTBDgUqMsDx6aolE', 1678910708),
('basico', 'XRNDmoTOzNm214MdrLLewS64aRkylJ', '8dEMQE30yCLQQpWZvdxdccgQjB5yrm', 1678911245),
('basico', 'Tmq9B4ZQDa5Qf4cXhD0ZwRI1YPqbrR', 'dqbiThZ3BvQRMNq94i9xABoOK7RAA1', 1678911820),
('basico', 'w00KotSsf3X186hQfTeo1JyK1ksEgU', 'ERQ9js7MVxUAZEFw9qPyzewTkc3Zzv', 1678911820),
('basico', '8FMEQjj2XDrbdOgHXSG3mRTqZYIrLO', '1Qljd8L1dkaTxjB6Dj5M8VjmbVx59T', 1678913026),
('basico', 'sjDhONeUT5xjLaMEvZa3FtexsbT6JO', 'USHBvHWyq7s6mQNuojtqcqlSdmV06K', 1678937531);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motivo_visita`
--

CREATE TABLE `motivo_visita` (
  `VcrIdMot` varchar(12) NOT NULL,
  `VcrMotVis` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `motivo_visita`
--

INSERT INTO `motivo_visita` (`VcrIdMot`, `VcrMotVis`) VALUES
('8001012401', 'Operativo'),
('8001012402', 'Seguimiento'),
('8001012403', 'Solicitud'),
('8001012404', 'Sin asignar'),
('8001012405', 'No aplica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipios`
--

CREATE TABLE `municipios` (
  `VcrIdExp` varchar(12) NOT NULL,
  `VcrExpEn` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `municipios`
--

INSERT INTO `municipios` (`VcrIdExp`, `VcrExpEn`) VALUES
('11001', 'Bogotá. D.C.'),
('13001', 'Cartagena De Indias'),
('13006', 'Achí'),
('13030', 'Altos Del Rosario'),
('13042', 'Arenal'),
('13052', 'Arjona'),
('13062', 'Arroyohondo'),
('13074', 'Barranco De Loba'),
('13140', 'Calamar'),
('13160', 'Cantagallo'),
('13188', 'Cicuco'),
('13212', 'Córdoba'),
('13222', 'Clemencia'),
('13244', 'El Carmen De Bolívar'),
('13248', 'El Guamo'),
('13268', 'El Peñón'),
('13300', 'Hatillo De Loba'),
('13430', 'Magangué'),
('13433', 'Mahates'),
('13440', 'Margarita'),
('13442', 'María La Baja'),
('13458', 'Montecristo'),
('13468', 'Santa Cruz De Mompox'),
('13473', 'Morales'),
('13490', 'Norosí'),
('13549', 'Pinillos'),
('13580', 'Regidor'),
('13600', 'Río Viejo'),
('13620', 'San Cristóbal'),
('13647', 'San Estanislao'),
('13650', 'San Fernando'),
('13654', 'San Jacinto'),
('13655', 'San Jacinto Del Cauca'),
('13657', 'San Juan Nepomuceno'),
('13667', 'San Martín De Loba'),
('13670', 'San Pablo'),
('13673', 'Santa Catalina'),
('13683', 'Santa Rosa'),
('13688', 'Santa Rosa Del Sur'),
('13744', 'Simití'),
('13760', 'Soplaviento'),
('13780', 'Talaigua Nuevo'),
('13810', 'Tiquisio'),
('13836', 'Turbaco'),
('13838', 'Turbaná'),
('13873', 'Villanueva'),
('13894', 'Zambrano'),
('15001', 'Tunja'),
('15022', 'Almeida'),
('15047', 'Aquitania'),
('15051', 'Arcabuco'),
('15087', 'Belén'),
('15090', 'Berbeo'),
('15092', 'Betéitiva'),
('15097', 'Boavita'),
('15104', 'Boyacá'),
('15106', 'Briceño'),
('15109', 'Buenavista'),
('15114', 'Busbanzá'),
('15131', 'Caldas'),
('15135', 'Campohermoso'),
('15162', 'Cerinza'),
('15172', 'Chinavita'),
('15176', 'Chiquinquirá'),
('15180', 'Chiscas'),
('15183', 'Chita'),
('15185', 'Chitaraque'),
('15187', 'Chivatá'),
('15189', 'Ciénega'),
('15204', 'Cómbita'),
('15212', 'Coper'),
('15215', 'Corrales'),
('15218', 'Covarachía'),
('15223', 'Cubará'),
('15224', 'Cucaita'),
('15226', 'Cuítiva'),
('15232', 'Chíquiza'),
('15236', 'Chivor'),
('15238', 'Duitama'),
('15244', 'El Cocuy'),
('15248', 'El Espino'),
('15272', 'Firavitoba'),
('15276', 'Floresta'),
('15293', 'Gachantivá'),
('15296', 'Gámeza'),
('15299', 'Garagoa'),
('15317', 'Guacamayas'),
('15322', 'Guateque'),
('15325', 'Guayatá'),
('15332', 'Güicán De La Sierra'),
('15362', 'Iza'),
('15367', 'Jenesano'),
('15368', 'Jericó'),
('15377', 'Labranzagrande'),
('15380', 'La Capilla'),
('15401', 'La Victoria'),
('15403', 'La Uvita'),
('15407', 'Villa De Leyva'),
('15425', 'Macanal'),
('15442', 'Maripí'),
('15455', 'Miraflores'),
('15464', 'Mongua'),
('15466', 'Monguí'),
('15469', 'Moniquirá'),
('15476', 'Motavita'),
('15480', 'Muzo'),
('15491', 'Nobsa'),
('15494', 'Nuevo Colón'),
('15500', 'Oicatá'),
('15507', 'Otanche'),
('15511', 'Pachavita'),
('15514', 'Páez'),
('15516', 'Paipa'),
('15518', 'Pajarito'),
('15522', 'Panqueba'),
('15531', 'Pauna'),
('15533', 'Paya'),
('15537', 'Paz De Río'),
('15542', 'Pesca'),
('15550', 'Pisba'),
('15572', 'Puerto Boyacá'),
('15580', 'Quípama'),
('15599', 'Ramiriquí'),
('15600', 'Ráquira'),
('15621', 'Rondón'),
('15632', 'Saboyá'),
('15638', 'Sáchica'),
('15646', 'Samacá'),
('15660', 'San Eduardo'),
('15664', 'San José De Pare'),
('15667', 'San Luis De Gaceno'),
('15673', 'San Mateo'),
('15676', 'San Miguel De Sema'),
('15681', 'San Pablo De Borbur'),
('15686', 'Santana'),
('15690', 'Santa María'),
('15693', 'Santa Rosa De Viterbo'),
('15696', 'Santa Sofía'),
('15720', 'Sativanorte'),
('15723', 'Sativasur'),
('15740', 'Siachoque'),
('15753', 'Soatá'),
('15755', 'Socotá'),
('15757', 'Socha'),
('15759', 'Sogamoso'),
('15761', 'Somondoco'),
('15762', 'Sora'),
('15763', 'Sotaquirá'),
('15764', 'Soracá'),
('15774', 'Susacón'),
('15776', 'Sutamarchán'),
('15778', 'Sutatenza'),
('15790', 'Tasco'),
('15798', 'Tenza'),
('15804', 'Tibaná'),
('15806', 'Tibasosa'),
('15808', 'Tinjacá'),
('15810', 'Tipacoque'),
('15814', 'Toca'),
('15816', 'Togüí'),
('15820', 'Tópaga'),
('15822', 'Tota'),
('15832', 'Tununguá'),
('15835', 'Turmequé'),
('15837', 'Tuta'),
('15839', 'Tutazá'),
('15842', 'Úmbita'),
('15861', 'Ventaquemada'),
('15879', 'Viracachá'),
('15897', 'Zetaquira'),
('17001', 'Manizales'),
('17013', 'Aguadas'),
('17042', 'Anserma'),
('17050', 'Aranzazu'),
('17088', 'Belalcázar'),
('17174', 'Chinchiná'),
('17272', 'Filadelfia'),
('17380', 'La Dorada'),
('17388', 'La Merced'),
('17433', 'Manzanares'),
('17442', 'Marmato'),
('17444', 'Marquetalia'),
('17446', 'Marulanda'),
('17486', 'Neira'),
('17495', 'Norcasia'),
('17513', 'Pácora'),
('17524', 'Palestina'),
('17541', 'Pensilvania'),
('17614', 'Riosucio'),
('17616', 'Risaralda'),
('17653', 'Salamina'),
('17662', 'Samaná'),
('17665', 'San José'),
('17777', 'Supía'),
('17867', 'Victoria'),
('17873', 'Villamaría'),
('17877', 'Viterbo'),
('18001', 'Florencia'),
('18029', 'Albania'),
('18094', 'Belén De Los Andaquíes'),
('18150', 'Cartagena Del Chairá'),
('18205', 'Curillo'),
('18247', 'El Doncello'),
('18256', 'El Paujíl'),
('18410', 'La Montañita'),
('18460', 'Milán'),
('18479', 'Morelia'),
('18592', 'Puerto Rico'),
('18610', 'San José Del Fragua'),
('18753', 'San Vicente Del Caguán'),
('18756', 'Solano'),
('18785', 'Solita'),
('18860', 'Valparaíso'),
('19001', 'Popayán'),
('19022', 'Almaguer'),
('19050', 'Argelia'),
('19075', 'Balboa'),
('19100', 'Bolívar'),
('19110', 'Buenos Aires'),
('19130', 'Cajibío'),
('19137', 'Caldono'),
('19142', 'Caloto'),
('19212', 'Corinto'),
('19256', 'El Tambo'),
('19290', 'Florencia'),
('19300', 'Guachené'),
('19318', 'Guapi'),
('19355', 'Inzá'),
('19364', 'Jambaló'),
('19392', 'La Sierra'),
('19397', 'La Vega'),
('19418', 'López De Micay'),
('19450', 'Mercaderes'),
('19455', 'Miranda'),
('19473', 'Morales'),
('19513', 'Padilla'),
('19517', 'Páez'),
('19532', 'Patía'),
('19533', 'Piamonte'),
('19548', 'Piendamó - Tunía'),
('19573', 'Puerto Tejada'),
('19585', 'Puracé'),
('19622', 'Rosas'),
('19693', 'San Sebastián'),
('19698', 'Santander De Quilichao'),
('19701', 'Santa Rosa'),
('19743', 'Silvia'),
('19760', 'Sotará Paispamba'),
('19780', 'Suárez'),
('19785', 'Sucre'),
('19807', 'Timbío'),
('19809', 'Timbiquí'),
('19821', 'Toribío'),
('19824', 'Totoró'),
('19845', 'Villa Rica'),
('20001', 'Valledupar'),
('20011', 'Aguachica'),
('20013', 'Agustín Codazzi'),
('20032', 'Astrea'),
('20045', 'Becerril'),
('20060', 'Bosconia'),
('20175', 'Chimichagua'),
('20178', 'Chiriguaná'),
('20228', 'Curumaní'),
('20238', 'El Copey'),
('20250', 'El Paso'),
('20295', 'Gamarra'),
('20310', 'González'),
('20383', 'La Gloria'),
('20400', 'La Jagua De Ibirico'),
('20443', 'Manaure Balcón Del Cesar'),
('20517', 'Pailitas'),
('20550', 'Pelaya'),
('20570', 'Pueblo Bello'),
('20614', 'Río De Oro'),
('20621', 'La Paz'),
('20710', 'San Alberto'),
('20750', 'San Diego'),
('20770', 'San Martín'),
('20787', 'Tamalameque'),
('23001', 'Montería'),
('23068', 'Ayapel'),
('23079', 'Buenavista'),
('23090', 'Canalete'),
('23162', 'Cereté'),
('23168', 'Chimá'),
('23182', 'Chinú'),
('23189', 'Ciénaga De Oro'),
('23300', 'Cotorra'),
('23350', 'La Apartada'),
('23417', 'Lorica'),
('23419', 'Los Córdobas'),
('23464', 'Momil'),
('23466', 'Montelíbano'),
('23500', 'Moñitos'),
('23555', 'Planeta Rica'),
('23570', 'Pueblo Nuevo'),
('23574', 'Puerto Escondido'),
('23580', 'Puerto Libertador'),
('23586', 'Purísima De La Concepción'),
('23660', 'Sahagún'),
('23670', 'San Andrés De Sotavento'),
('23672', 'San Antero'),
('23675', 'San Bernardo Del Viento'),
('23678', 'San Carlos'),
('23682', 'San José De Uré'),
('23686', 'San Pelayo'),
('23807', 'Tierralta'),
('23815', 'Tuchín'),
('23855', 'Valencia'),
('25001', 'Agua De Dios'),
('25019', 'Albán'),
('25035', 'Anapoima'),
('25040', 'Anolaima'),
('25053', 'Arbeláez'),
('25086', 'Beltrán'),
('25095', 'Bituima'),
('25099', 'Bojacá'),
('25120', 'Cabrera'),
('25123', 'Cachipay'),
('25126', 'Cajicá'),
('25148', 'Caparrapí'),
('25151', 'Cáqueza'),
('25154', 'Carmen De Carupa'),
('25168', 'Chaguaní'),
('25175', 'Chía'),
('25178', 'Chipaque'),
('25181', 'Choachí'),
('25183', 'Chocontá'),
('25200', 'Cogua'),
('25214', 'Cota'),
('25224', 'Cucunubá'),
('25245', 'El Colegio'),
('25258', 'El Peñón'),
('25260', 'El Rosal'),
('25269', 'Facatativá'),
('25279', 'Fómeque'),
('25281', 'Fosca'),
('25286', 'Funza'),
('25288', 'Fúquene'),
('25290', 'Fusagasugá'),
('25293', 'Gachalá'),
('25295', 'Gachancipá'),
('25297', 'Gachetá'),
('25299', 'Gama'),
('25307', 'Girardot'),
('25312', 'Granada'),
('25317', 'Guachetá'),
('25320', 'Guaduas'),
('25322', 'Guasca'),
('25324', 'Guataquí'),
('25326', 'Guatavita'),
('25328', 'Guayabal De Síquima'),
('25335', 'Guayabetal'),
('25339', 'Gutiérrez'),
('25368', 'Jerusalén'),
('25372', 'Junín'),
('25377', 'La Calera'),
('25386', 'La Mesa'),
('25394', 'La Palma'),
('25398', 'La Peña'),
('25402', 'La Vega'),
('25407', 'Lenguazaque'),
('25426', 'Machetá'),
('25430', 'Madrid'),
('25436', 'Manta'),
('25438', 'Medina'),
('25473', 'Mosquera'),
('25483', 'Nariño'),
('25486', 'Nemocón'),
('25488', 'Nilo'),
('25489', 'Nimaima'),
('25491', 'Nocaima'),
('25506', 'Venecia'),
('25513', 'Pacho'),
('25518', 'Paime'),
('25524', 'Pandi'),
('25530', 'Paratebueno'),
('25535', 'Pasca'),
('25572', 'Puerto Salgar'),
('25580', 'Pulí'),
('25592', 'Quebradanegra'),
('25594', 'Quetame'),
('25596', 'Quipile'),
('25599', 'Apulo'),
('25612', 'Ricaurte'),
('25645', 'San Antonio Del Tequendama'),
('25649', 'San Bernardo'),
('25653', 'San Cayetano'),
('25658', 'San Francisco'),
('25662', 'San Juan De Rioseco'),
('25718', 'Sasaima'),
('25736', 'Sesquilé'),
('25740', 'Sibaté'),
('25743', 'Silvania'),
('25745', 'Simijaca'),
('25754', 'Soacha'),
('25758', 'Sopó'),
('25769', 'Subachoque'),
('25772', 'Suesca'),
('25777', 'Supatá'),
('25779', 'Susa'),
('25781', 'Sutatausa'),
('25785', 'Tabio'),
('25793', 'Tausa'),
('25797', 'Tena'),
('25799', 'Tenjo'),
('25805', 'Tibacuy'),
('25807', 'Tibirita'),
('25815', 'Tocaima'),
('25817', 'Tocancipá'),
('25823', 'Topaipí'),
('25839', 'Ubalá'),
('25841', 'Ubaque'),
('25843', 'Villa De San Diego De Ubaté'),
('25845', 'Une'),
('25851', 'Útica'),
('25862', 'Vergara'),
('25867', 'Vianí'),
('25871', 'Villagómez'),
('25873', 'Villapinzón'),
('25875', 'Villeta'),
('25878', 'Viotá'),
('25885', 'Yacopí'),
('25898', 'Zipacón'),
('25899', 'Zipaquirá'),
('27001', 'Quibdó'),
('27006', 'Acandí'),
('27025', 'Alto Baudó'),
('27050', 'Atrato'),
('27073', 'Bagadó'),
('27075', 'Bahía Solano'),
('27077', 'Bajo Baudó'),
('27099', 'Bojayá'),
('27135', 'El Cantón Del San Pablo'),
('27150', 'Carmen Del Darién'),
('27160', 'Cértegui'),
('27205', 'Condoto'),
('27245', 'El Carmen De Atrato'),
('27250', 'El Litoral Del San Juan'),
('27361', 'Istmina'),
('27372', 'Juradó'),
('27413', 'Lloró'),
('27425', 'Medio Atrato'),
('27430', 'Medio Baudó'),
('27450', 'Medio San Juan'),
('27491', 'Nóvita'),
('27495', 'Nuquí'),
('27580', 'Río Iró'),
('27600', 'Río Quito'),
('27615', 'Riosucio'),
('27660', 'San José Del Palmar'),
('27745', 'Sipí'),
('27787', 'Tadó'),
('27800', 'Unguía'),
('27810', 'Unión Panamericana'),
('41001', 'Neiva'),
('41006', 'Acevedo'),
('41013', 'Agrado'),
('41016', 'Aipe'),
('41020', 'Algeciras'),
('41026', 'Altamira'),
('41078', 'Baraya'),
('41132', 'Campoalegre'),
('41206', 'Colombia'),
('41244', 'Elías'),
('41298', 'Garzón'),
('41306', 'Gigante'),
('41319', 'Guadalupe'),
('41349', 'Hobo'),
('41357', 'Íquira'),
('41359', 'Isnos'),
('41378', 'La Argentina'),
('41396', 'La Plata'),
('41483', 'Nátaga'),
('41503', 'Oporapa'),
('41518', 'Paicol'),
('41524', 'Palermo'),
('41530', 'Palestina'),
('41548', 'Pital'),
('41551', 'Pitalito'),
('41615', 'Rivera'),
('41660', 'Saladoblanco'),
('41668', 'San Agustín'),
('41676', 'Santa María'),
('41770', 'Suaza'),
('41791', 'Tarqui'),
('41797', 'Tesalia'),
('41799', 'Tello'),
('41801', 'Teruel'),
('41807', 'Timaná'),
('41872', 'Villavieja'),
('41885', 'Yaguará'),
('44001', 'Riohacha'),
('44035', 'Albania'),
('44078', 'Barrancas'),
('44090', 'Dibulla'),
('44098', 'Distracción'),
('44110', 'El Molino'),
('44279', 'Fonseca'),
('44378', 'Hatonuevo'),
('44420', 'La Jagua Del Pilar'),
('44430', 'Maicao'),
('44560', 'Manaure'),
('44650', 'San Juan Del Cesar'),
('44847', 'Uribia'),
('44855', 'Urumita'),
('44874', 'Villanueva'),
('47001', 'Santa Marta'),
('47030', 'Algarrobo'),
('47053', 'Aracataca'),
('47058', 'Ariguaní'),
('47161', 'Cerro De San Antonio'),
('47170', 'Chivolo'),
('47189', 'Ciénaga'),
('47205', 'Concordia'),
('47245', 'El Banco'),
('47258', 'El Piñón'),
('47268', 'El Retén'),
('47288', 'Fundación'),
('47318', 'Guamal'),
('47460', 'Nueva Granada'),
('47541', 'Pedraza'),
('47545', 'Pijiño Del Carmen'),
('47551', 'Pivijay'),
('47555', 'Plato'),
('47570', 'Puebloviejo'),
('47605', 'Remolino'),
('47660', 'Sabanas De San Ángel'),
('47675', 'Salamina'),
('47692', 'San Sebastián De Buenavista'),
('47703', 'San Zenón'),
('47707', 'Santa Ana'),
('47720', 'Santa Bárbara De Pinto'),
('47745', 'Sitionuevo'),
('47798', 'Tenerife'),
('47960', 'Zapayán'),
('47980', 'Zona Bananera'),
('50001', 'Villavicencio'),
('50006', 'Acacías'),
('5001', 'Medellín'),
('5002', 'Abejorral'),
('5004', 'Abriaquí'),
('50110', 'Barranca De Upía'),
('50124', 'Cabuyaro'),
('50150', 'Castilla La Nueva'),
('5021', 'Alejandría'),
('50223', 'Cubarral'),
('50226', 'Cumaral'),
('50245', 'El Calvario'),
('50251', 'El Castillo'),
('50270', 'El Dorado'),
('50287', 'Fuente De Oro'),
('5030', 'Amagá'),
('5031', 'Amalfi'),
('50313', 'Granada'),
('50318', 'Guamal'),
('50325', 'Mapiripán'),
('50330', 'Mesetas'),
('5034', 'Andes'),
('50350', 'La Macarena'),
('5036', 'Angelópolis'),
('50370', 'Uribe'),
('5038', 'Angostura'),
('5040', 'Anorí'),
('50400', 'Lejanías'),
('5042', 'Santa Fé De Antioquia'),
('5044', 'Anzá'),
('5045', 'Apartadó'),
('50450', 'Puerto Concordia'),
('5051', 'Arboletes'),
('5055', 'Argelia'),
('50568', 'Puerto Gaitán'),
('50573', 'Puerto López'),
('50577', 'Puerto Lleras'),
('5059', 'Armenia'),
('50590', 'Puerto Rico'),
('50606', 'Restrepo'),
('50680', 'San Carlos De Guaroa'),
('50683', 'San Juan De Arama'),
('50686', 'San Juanito'),
('50689', 'San Martín'),
('50711', 'Vistahermosa'),
('5079', 'Barbosa'),
('5086', 'Belmira'),
('5088', 'Bello'),
('5091', 'Betania'),
('5093', 'Betulia'),
('5101', 'Ciudad Bolívar'),
('5107', 'Briceño'),
('5113', 'Buriticá'),
('5120', 'Cáceres'),
('5125', 'Caicedo'),
('5129', 'Caldas'),
('5134', 'Campamento'),
('5138', 'Cañasgordas'),
('5142', 'Caracolí'),
('5145', 'Caramanta'),
('5147', 'Carepa'),
('5148', 'El Carmen De Viboral'),
('5150', 'Carolina'),
('5154', 'Caucasia'),
('5172', 'Chigorodó'),
('5190', 'Cisneros'),
('5197', 'Cocorná'),
('52001', 'Pasto'),
('52019', 'Albán'),
('52022', 'Aldana'),
('52036', 'Ancuya'),
('52051', 'Arboleda'),
('5206', 'Concepción'),
('52079', 'Barbacoas'),
('52083', 'Belén'),
('5209', 'Concordia'),
('52110', 'Buesaco'),
('5212', 'Copacabana'),
('52203', 'Colón'),
('52207', 'Consacá'),
('52210', 'Contadero'),
('52215', 'Córdoba'),
('52224', 'Cuaspud Carlosama'),
('52227', 'Cumbal'),
('52233', 'Cumbitara'),
('52240', 'Chachagüí'),
('52250', 'El Charco'),
('52254', 'El Peñol'),
('52256', 'El Rosario'),
('52258', 'El Tablón De Gómez'),
('52260', 'El Tambo'),
('52287', 'Funes'),
('52317', 'Guachucal'),
('52320', 'Guaitarilla'),
('52323', 'Gualmatán'),
('5234', 'Dabeiba'),
('52352', 'Iles'),
('52354', 'Imués'),
('52356', 'Ipiales'),
('5237', 'Donmatías'),
('52378', 'La Cruz'),
('52381', 'La Florida'),
('52385', 'La Llanada'),
('52390', 'La Tola'),
('52399', 'La Unión'),
('5240', 'Ebéjico'),
('52405', 'Leiva'),
('52411', 'Linares'),
('52418', 'Los Andes'),
('52427', 'Magüí'),
('52435', 'Mallama'),
('52473', 'Mosquera'),
('52480', 'Nariño'),
('52490', 'Olaya Herrera'),
('5250', 'El Bagre'),
('52506', 'Ospina'),
('52520', 'Francisco Pizarro'),
('52540', 'Policarpa'),
('52560', 'Potosí'),
('52565', 'Providencia'),
('52573', 'Puerres'),
('52585', 'Pupiales'),
('52612', 'Ricaurte'),
('52621', 'Roberto Payán'),
('5264', 'Entrerríos'),
('5266', 'Envigado'),
('52678', 'Samaniego'),
('52683', 'Sandoná'),
('52685', 'San Bernardo'),
('52687', 'San Lorenzo'),
('52693', 'San Pablo'),
('52694', 'San Pedro De Cartago'),
('52696', 'Santa Bárbara'),
('52699', 'Santacruz'),
('52720', 'Sapuyes'),
('52786', 'Taminango'),
('52788', 'Tangua'),
('5282', 'Fredonia'),
('52835', 'San Andrés De Tumaco'),
('52838', 'Túquerres'),
('5284', 'Frontino'),
('52885', 'Yacuanquer'),
('5306', 'Giraldo'),
('5308', 'Girardota'),
('5310', 'Gómez Plata'),
('5313', 'Granada'),
('5315', 'Guadalupe'),
('5318', 'Guarne'),
('5321', 'Guatapé'),
('5347', 'Heliconia'),
('5353', 'Hispania'),
('5360', 'Itagüí'),
('5361', 'Ituango'),
('5364', 'Jardín'),
('5368', 'Jericó'),
('5376', 'La Ceja'),
('5380', 'La Estrella'),
('5390', 'La Pintada'),
('5400', 'La Unión'),
('54001', 'San José De Cúcuta'),
('54003', 'Ábrego'),
('54051', 'Arboledas'),
('54099', 'Bochalema'),
('54109', 'Bucarasica'),
('5411', 'Liborina'),
('54125', 'Cácota'),
('54128', 'Cáchira'),
('54172', 'Chinácota'),
('54174', 'Chitagá'),
('54206', 'Convención'),
('54223', 'Cucutilla'),
('54239', 'Durania'),
('54245', 'El Carmen'),
('5425', 'Maceo'),
('54250', 'El Tarra'),
('54261', 'El Zulia'),
('54313', 'Gramalote'),
('54344', 'Hacarí'),
('54347', 'Herrán'),
('54377', 'Labateca'),
('54385', 'La Esperanza'),
('54398', 'La Playa'),
('5440', 'Marinilla'),
('54405', 'Los Patios'),
('54418', 'Lourdes'),
('54480', 'Mutiscua'),
('54498', 'Ocaña'),
('54518', 'Pamplona'),
('54520', 'Pamplonita'),
('54553', 'Puerto Santander'),
('54599', 'Ragonvalia'),
('54660', 'Salazar'),
('5467', 'Montebello'),
('54670', 'San Calixto'),
('54673', 'San Cayetano'),
('54680', 'Santiago'),
('54720', 'Sardinata'),
('54743', 'Silos'),
('5475', 'Murindó'),
('5480', 'Mutatá'),
('54800', 'Teorama'),
('54810', 'Tibú'),
('54820', 'Toledo'),
('5483', 'Nariño'),
('54871', 'Villa Caro'),
('54874', 'Villa Del Rosario'),
('5490', 'Necoclí'),
('5495', 'Nechí'),
('5501', 'Olaya'),
('5541', 'Peñol'),
('5543', 'Peque'),
('5576', 'Pueblorrico'),
('5579', 'Puerto Berrío'),
('5585', 'Puerto Nare'),
('5591', 'Puerto Triunfo'),
('5604', 'Remedios'),
('5607', 'Retiro'),
('5615', 'Rionegro'),
('5628', 'Sabanalarga'),
('5631', 'Sabaneta'),
('5642', 'Salgar'),
('5647', 'San Andrés De Cuerquía'),
('5649', 'San Carlos'),
('5652', 'San Francisco'),
('5656', 'San Jerónimo'),
('5658', 'San José De La Montaña'),
('5659', 'San Juan De Urabá'),
('5660', 'San Luis'),
('5664', 'San Pedro De Los Milagros'),
('5665', 'San Pedro De Urabá'),
('5667', 'San Rafael'),
('5670', 'San Roque'),
('5674', 'San Vicente Ferrer'),
('5679', 'Santa Bárbara'),
('5686', 'Santa Rosa De Osos'),
('5690', 'Santo Domingo'),
('5697', 'El Santuario'),
('5736', 'Segovia'),
('5756', 'Sonsón'),
('5761', 'Sopetrán'),
('5789', 'Támesis'),
('5790', 'Tarazá'),
('5792', 'Tarso'),
('5809', 'Titiribí'),
('5819', 'Toledo'),
('5837', 'Turbo'),
('5842', 'Uramita'),
('5847', 'Urrao'),
('5854', 'Valdivia'),
('5856', 'Valparaíso'),
('5858', 'Vegachí'),
('5861', 'Venecia'),
('5873', 'Vigía Del Fuerte'),
('5885', 'Yalí'),
('5887', 'Yarumal'),
('5890', 'Yolombó'),
('5893', 'Yondó'),
('5895', 'Zaragoza'),
('63001', 'Armenia'),
('63111', 'Buenavista'),
('63130', 'Calarcá'),
('63190', 'Circasia'),
('63212', 'Córdoba'),
('63272', 'Filandia'),
('63302', 'Génova'),
('63401', 'La Tebaida'),
('63470', 'Montenegro'),
('63548', 'Pijao'),
('63594', 'Quimbaya'),
('63690', 'Salento'),
('66001', 'Pereira'),
('66045', 'Apía'),
('66075', 'Balboa'),
('66088', 'Belén De Umbría'),
('66170', 'Dosquebradas'),
('66318', 'Guática'),
('66383', 'La Celia'),
('66400', 'La Virginia'),
('66440', 'Marsella'),
('66456', 'Mistrató'),
('66572', 'Pueblo Rico'),
('66594', 'Quinchía'),
('66682', 'Santa Rosa De Cabal'),
('66687', 'Santuario'),
('68001', 'Bucaramanga'),
('68013', 'Aguada'),
('68020', 'Albania'),
('68051', 'Aratoca'),
('68077', 'Barbosa'),
('68079', 'Barichara'),
('68081', 'Barrancabermeja'),
('68092', 'Betulia'),
('68101', 'Bolívar'),
('68121', 'Cabrera'),
('68132', 'California'),
('68147', 'Capitanejo'),
('68152', 'Carcasí'),
('68160', 'Cepitá'),
('68162', 'Cerrito'),
('68167', 'Charalá'),
('68169', 'Charta'),
('68176', 'Chima'),
('68179', 'Chipatá'),
('68190', 'Cimitarra'),
('68207', 'Concepción'),
('68209', 'Confines'),
('68211', 'Contratación'),
('68217', 'Coromoro'),
('68229', 'Curití'),
('68235', 'El Carmen De Chucuri'),
('68245', 'El Guacamayo'),
('68250', 'El Peñón'),
('68255', 'El Playón'),
('68264', 'Encino'),
('68266', 'Enciso'),
('68271', 'Florián'),
('68276', 'Floridablanca'),
('68296', 'Galán'),
('68298', 'Gámbita'),
('68307', 'Girón'),
('68318', 'Guaca'),
('68320', 'Guadalupe'),
('68322', 'Guapotá'),
('68324', 'Guavatá'),
('68327', 'Güepsa'),
('68344', 'Hato'),
('68368', 'Jesús María'),
('68370', 'Jordán'),
('68377', 'La Belleza'),
('68385', 'Landázuri'),
('68397', 'La Paz'),
('68406', 'Lebrija'),
('68418', 'Los Santos'),
('68425', 'Macaravita'),
('68432', 'Málaga'),
('68444', 'Matanza'),
('68464', 'Mogotes'),
('68468', 'Molagavita'),
('68498', 'Ocamonte'),
('68500', 'Oiba'),
('68502', 'Onzaga'),
('68522', 'Palmar'),
('68524', 'Palmas Del Socorro'),
('68533', 'Páramo'),
('68547', 'Piedecuesta'),
('68549', 'Pinchote'),
('68572', 'Puente Nacional'),
('68573', 'Puerto Parra'),
('68575', 'Puerto Wilches'),
('68615', 'Rionegro'),
('68655', 'Sabana De Torres'),
('68669', 'San Andrés'),
('68673', 'San Benito'),
('68679', 'San Gil'),
('68682', 'San Joaquín'),
('68684', 'San José De Miranda'),
('68686', 'San Miguel'),
('68689', 'San Vicente De Chucurí'),
('68705', 'Santa Bárbara'),
('68720', 'Santa Helena Del Opón'),
('68745', 'Simacota'),
('68755', 'Socorro'),
('68770', 'Suaita'),
('68773', 'Sucre'),
('68780', 'Suratá'),
('68820', 'Tona'),
('68855', 'Valle De San José'),
('68861', 'Vélez'),
('68867', 'Vetas'),
('68872', 'Villanueva'),
('68895', 'Zapatoca'),
('70001', 'Sincelejo'),
('70110', 'Buenavista'),
('70124', 'Caimito'),
('70204', 'Colosó'),
('70215', 'Corozal'),
('70221', 'Coveñas'),
('70230', 'Chalán'),
('70233', 'El Roble'),
('70235', 'Galeras'),
('70265', 'Guaranda'),
('70400', 'La Unión'),
('70418', 'Los Palmitos'),
('70429', 'Majagual'),
('70473', 'Morroa'),
('70508', 'Ovejas'),
('70523', 'Palmito'),
('70670', 'Sampués'),
('70678', 'San Benito Abad'),
('70702', 'San Juan De Betulia'),
('70708', 'San Marcos'),
('70713', 'San Onofre'),
('70717', 'San Pedro'),
('70742', 'San Luis De Sincé'),
('70771', 'Sucre'),
('70820', 'Santiago De Tolú'),
('70823', 'San José De Toluviejo'),
('73001', 'Ibagué'),
('73024', 'Alpujarra'),
('73026', 'Alvarado'),
('73030', 'Ambalema'),
('73043', 'Anzoátegui'),
('73055', 'Armero'),
('73067', 'Ataco'),
('73124', 'Cajamarca'),
('73148', 'Carmen De Apicalá'),
('73152', 'Casabianca'),
('73168', 'Chaparral'),
('73200', 'Coello'),
('73217', 'Coyaima'),
('73226', 'Cunday'),
('73236', 'Dolores'),
('73268', 'Espinal'),
('73270', 'Falan'),
('73275', 'Flandes'),
('73283', 'Fresno'),
('73319', 'Guamo'),
('73347', 'Herveo'),
('73349', 'Honda'),
('73352', 'Icononzo'),
('73408', 'Lérida'),
('73411', 'Líbano'),
('73443', 'San Sebastián De Mariquita'),
('73449', 'Melgar'),
('73461', 'Murillo'),
('73483', 'Natagaima'),
('73504', 'Ortega'),
('73520', 'Palocabildo'),
('73547', 'Piedras'),
('73555', 'Planadas'),
('73563', 'Prado'),
('73585', 'Purificación'),
('73616', 'Rioblanco'),
('73622', 'Roncesvalles'),
('73624', 'Rovira'),
('73671', 'Saldaña'),
('73675', 'San Antonio'),
('73678', 'San Luis'),
('73686', 'Santa Isabel'),
('73770', 'Suárez'),
('73854', 'Valle De San Juan'),
('73861', 'Venadillo'),
('73870', 'Villahermosa'),
('73873', 'Villarrica'),
('76001', 'Cali'),
('76020', 'Alcalá'),
('76036', 'Andalucía'),
('76041', 'Ansermanuevo'),
('76054', 'Argelia'),
('76100', 'Bolívar'),
('76109', 'Buenaventura'),
('76111', 'Guadalajara De Buga'),
('76113', 'Bugalagrande'),
('76122', 'Caicedonia'),
('76126', 'Calima'),
('76130', 'Candelaria'),
('76147', 'Cartago'),
('76233', 'Dagua'),
('76243', 'El Águila'),
('76246', 'El Cairo'),
('76248', 'El Cerrito'),
('76250', 'El Dovio'),
('76275', 'Florida'),
('76306', 'Ginebra'),
('76318', 'Guacarí'),
('76364', 'Jamundí'),
('76377', 'La Cumbre'),
('76400', 'La Unión'),
('76403', 'La Victoria'),
('76497', 'Obando'),
('76520', 'Palmira'),
('76563', 'Pradera'),
('76606', 'Restrepo'),
('76616', 'Riofrío'),
('76622', 'Roldanillo'),
('76670', 'San Pedro'),
('76736', 'Sevilla'),
('76823', 'Toro'),
('76828', 'Trujillo'),
('76834', 'Tuluá'),
('76845', 'Ulloa'),
('76863', 'Versalles'),
('76869', 'Vijes'),
('76890', 'Yotoco'),
('76892', 'Yumbo'),
('76895', 'Zarzal'),
('8001', 'Barranquilla'),
('8078', 'Baranoa'),
('81001', 'Arauca'),
('81065', 'Arauquita'),
('81220', 'Cravo Norte'),
('81300', 'Fortul'),
('8137', 'Campo De La Cruz'),
('8141', 'Candelaria'),
('81591', 'Puerto Rondón'),
('81736', 'Saravena'),
('81794', 'Tame'),
('8296', 'Galapa'),
('8372', 'Juan De Acosta'),
('8421', 'Luruaco'),
('8433', 'Malambo'),
('8436', 'Manatí'),
('85001', 'Yopal'),
('85010', 'Aguazul'),
('85015', 'Chámeza'),
('85125', 'Hato Corozal'),
('85136', 'La Salina'),
('85139', 'Maní'),
('85162', 'Monterrey'),
('8520', 'Palmar De Varela'),
('85225', 'Nunchía'),
('85230', 'Orocué'),
('85250', 'Paz De Ariporo'),
('85263', 'Pore'),
('85279', 'Recetor'),
('85300', 'Sabanalarga'),
('85315', 'Sácama'),
('85325', 'San Luis De Palenque'),
('85400', 'Támara'),
('85410', 'Tauramena'),
('85430', 'Trinidad'),
('85440', 'Villanueva'),
('8549', 'Piojó'),
('8558', 'Polonuevo'),
('8560', 'Ponedera'),
('8573', 'Puerto Colombia'),
('86001', 'Mocoa'),
('8606', 'Repelón'),
('86219', 'Colón'),
('86320', 'Orito'),
('8634', 'Sabanagrande'),
('8638', 'Sabanalarga'),
('86568', 'Puerto Asís'),
('86569', 'Puerto Caicedo'),
('86571', 'Puerto Guzmán'),
('86573', 'Puerto Leguízamo'),
('86749', 'Sibundoy'),
('8675', 'Santa Lucía'),
('86755', 'San Francisco'),
('86757', 'San Miguel'),
('86760', 'Santiago'),
('8685', 'Santo Tomás'),
('86865', 'Valle Del Guamuez'),
('86885', 'Villagarzón'),
('8758', 'Soledad'),
('8770', 'Suan'),
('88001', 'San Andrés'),
('8832', 'Tubará'),
('8849', 'Usiacurí'),
('88564', 'Providencia'),
('91001', 'Leticia'),
('91263', 'El Encanto'),
('91405', 'La Chorrera'),
('91407', 'La Pedrera'),
('91430', 'La Victoria'),
('91460', 'Mirití - Paraná'),
('91530', 'Puerto Alegría'),
('91536', 'Puerto Arica'),
('91540', 'Puerto Nariño'),
('91669', 'Puerto Santander'),
('91798', 'Tarapacá'),
('94001', 'Inírida'),
('94343', 'Barrancominas'),
('94883', 'San Felipe'),
('94884', 'Puerto Colombia'),
('94885', 'La Guadalupe'),
('94886', 'Cacahual'),
('94887', 'Pana Pana'),
('94888', 'Morichal'),
('95001', 'San José Del Guaviare'),
('95015', 'Calamar'),
('95025', 'El Retorno'),
('95200', 'Miraflores'),
('97001', 'Mitú'),
('97161', 'Carurú'),
('97511', 'Pacoa'),
('97666', 'Taraira'),
('97777', 'Papunahua'),
('97889', 'Yavaraté'),
('99001', 'Puerto Carreño'),
('99524', 'La Primavera'),
('99624', 'Santa Rosalía'),
('99773', 'Cumaribo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `natural`
--

CREATE TABLE `natural` (
  `VcrId` int(10) UNSIGNED NOT NULL,
  `VcrCodForm` varchar(20) DEFAULT NULL,
  `VcrIdSol` varchar(12) NOT NULL,
  `VcrFecVis` date DEFAULT NULL,
  `VcrNomAti` varchar(50) NOT NULL,
  `VcrIdTip` int(10) UNSIGNED NOT NULL,
  `VcrNoIde` varchar(10) NOT NULL,
  `VcrCel` int(11) DEFAULT NULL,
  `VcrCorEle` varchar(40) DEFAULT NULL,
  `VcrIdMot` varchar(12) NOT NULL,
  `VcrRadSol` varchar(20) DEFAULT NULL,
  `VcrFecSol` date DEFAULT NULL,
  `VcrObsDat` longtext DEFAULT NULL,
  `VcrIdUbi` bigint(20) NOT NULL,
  `VcrDir` varchar(40) NOT NULL,
  `VcrIdBarVe` varchar(10) NOT NULL,
  `VcrIdCorr` varchar(12) DEFAULT NULL,
  `VcrIdCom` varchar(12) NOT NULL,
  `VcrLat` decimal(10,5) NOT NULL,
  `VcrLon` decimal(10,5) NOT NULL,
  `VcrObsUbi` longtext DEFAULT NULL,
  `VcrIdFen` varchar(12) NOT NULL,
  `VcrDet` varchar(40) DEFAULT NULL,
  `VcrIdCar` varchar(12) NOT NULL,
  `VcrOtr` varchar(40) DEFAULT NULL,
  `VcrDesEve` tinytext DEFAULT NULL,
  `VcrIdEdi` varchar(12) DEFAULT NULL,
  `VcrNoPis` int(2) DEFAULT NULL,
  `VcrObrCiv` varchar(20) DEFAULT NULL,
  `VcrEstEdi` varchar(40) DEFAULT NULL,
  `VcrIdAfe` varchar(12) DEFAULT NULL,
  `VcrObsEst` longtext DEFAULT NULL,
  `VcrDanGrav` varchar(4) DEFAULT NULL,
  `VcrAnoCon` varchar(5) DEFAULT NULL,
  `VcrIdMat` int(10) UNSIGNED DEFAULT NULL,
  `VcrIdLes` varchar(12) DEFAULT NULL,
  `VcrAyuHum` varchar(3) NOT NULL,
  `VcrConAyu` varchar(20) DEFAULT NULL,
  `VcrObs` longtext DEFAULT NULL,
  `VcrCapRed` varchar(2) DEFAULT NULL,
  `VcrIdCap` varchar(12) DEFAULT NULL,
  `VcrOtrCap` longtext DEFAULT NULL,
  `VcrInf0a5F` int(11) DEFAULT NULL,
  `VcrInf0a5M` int(11) DEFAULT NULL,
  `VcrInf5a12F` int(11) DEFAULT NULL,
  `VcrInf5a12M` int(11) DEFAULT NULL,
  `VcrAd12a18F` int(11) DEFAULT NULL,
  `VcrAd12a18M` int(11) DEFAULT NULL,
  `VcrAd18a28F` int(11) DEFAULT NULL,
  `VcrAd18a28M` int(11) DEFAULT NULL,
  `VcrAd28a60F` int(11) DEFAULT NULL,
  `VcrAd28a60M` int(11) DEFAULT NULL,
  `VcrAdMay60F` int(11) DEFAULT NULL,
  `VcrAdMay60M` int(11) DEFAULT NULL,
  `VcrAfr` int(11) DEFAULT NULL,
  `VcrPal` int(11) DEFAULT NULL,
  `VcrInd` int(11) DEFAULT NULL,
  `VcrCau` int(11) DEFAULT NULL,
  `VcrGit` int(11) DEFAULT NULL,
  `VcrMes` int(11) DEFAULT NULL,
  `VcrOtrPer` varchar(40) DEFAULT NULL,
  `VcrPerNsNr` varchar(2) DEFAULT NULL,
  `VcrTraCas` varchar(2) NOT NULL,
  `VcrIdTra1` int(10) UNSIGNED DEFAULT NULL,
  `VcrdTra2` int(10) UNSIGNED DEFAULT NULL,
  `VcrIdTra3` int(10) UNSIGNED DEFAULT NULL,
  `VcrIdTra4` int(10) UNSIGNED DEFAULT NULL,
  `VcrRecLin` varchar(10) NOT NULL,
  `VcrRecLey` varchar(10) NOT NULL,
  `VcrRecPre` varchar(10) NOT NULL,
  `VcrRecAut` varchar(10) NOT NULL,
  `VcrDatPer` varchar(2) NOT NULL,
  `VcrUsoIma` varchar(2) NOT NULL,
  `VcrUsoDat` varchar(2) NOT NULL,
  `VcrAutCor` varchar(2) NOT NULL,
  `VcrNomAtVis` varchar(40) NOT NULL,
  `VcrNumIde` int(11) DEFAULT NULL,
  `VcrIdSerP` int(11) DEFAULT NULL,
  `VcrIma` varchar(40) DEFAULT NULL,
  `VcrVideo` varchar(40) DEFAULT NULL,
  `VcrDoc` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procesos`
--

CREATE TABLE `procesos` (
  `VcrIdProc` int(11) NOT NULL,
  `VcrNomProc` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servidor_publico`
--

CREATE TABLE `servidor_publico` (
  `VcrIdSerP` int(11) NOT NULL,
  `VcrSerPub` varchar(70) DEFAULT NULL,
  `VcrTipSerP` varchar(15) DEFAULT NULL,
  `VcrIdProc` int(11) DEFAULT NULL,
  `VcrCelSerP` varchar(40) DEFAULT NULL,
  `VcrCorrSerP` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servidor_publico`
--

INSERT INTO `servidor_publico` (`VcrIdSerP`, `VcrSerPub`, `VcrTipSerP`, `VcrIdProc`, `VcrCelSerP`, `VcrCorrSerP`) VALUES
(8359157, 'Juan Camilo Aldana Suarez', NULL, NULL, NULL, NULL),
(11313846, 'Edwin Palacios Romero', NULL, NULL, NULL, NULL),
(12912177, 'Rene Dario Quiñones', NULL, NULL, NULL, NULL),
(14467686, 'Nelson Hernandez', NULL, NULL, NULL, NULL),
(14637203, 'Carlos Mauricio Angulo Chavez', NULL, NULL, NULL, NULL),
(14675826, 'Diego fernando velasco gonzalez', NULL, NULL, NULL, NULL),
(14677053, 'Daniel Landazuri Cortes', NULL, NULL, NULL, NULL),
(14835369, 'Jorge Armando Ruiz', NULL, NULL, NULL, NULL),
(14836277, 'Jesus Santiago Patiño Giron', NULL, NULL, NULL, NULL),
(16481817, 'Oliverio Rubiano Bonilla', NULL, NULL, NULL, NULL),
(16616114, 'Jorge Enrique Ruiz Rico', NULL, NULL, NULL, NULL),
(16618708, 'Carlos Fernando Zuñiga Suarez', NULL, NULL, NULL, NULL),
(16651408, 'Gustavo Adolfo Balanta Gonzalez', NULL, NULL, NULL, NULL),
(16675368, 'Nelson Henao Castro', NULL, NULL, NULL, NULL),
(16715853, 'Sigifredo Aranzazu Bolaños Bolaños', NULL, NULL, NULL, NULL),
(16754418, 'Jaime Fajardo Gomez', NULL, NULL, NULL, NULL),
(16775952, 'Reinaldo Mosquera Munar', NULL, NULL, NULL, NULL),
(16804372, 'Cristian Camilo Ortiz Rojas', NULL, NULL, NULL, NULL),
(16826666, 'Armando Vasquez Garces', NULL, NULL, NULL, NULL),
(16887120, 'Jose Alonso Carabali', NULL, NULL, NULL, NULL),
(16893611, 'Balanta Gonzalez Gustavo Adolfo', NULL, NULL, NULL, NULL),
(16916418, 'Leonardo Albeiro Montaño Rada', NULL, NULL, NULL, NULL),
(16929304, 'Libardo Sanchez Belalcazar', NULL, NULL, NULL, NULL),
(16931164, 'Fausto Alejandro Colmenares Restrepo', NULL, NULL, NULL, NULL),
(16935418, 'Luis felipe Garces Sanchez', NULL, NULL, NULL, NULL),
(16935747, 'Carlos Felipe Rua Delgado', NULL, NULL, NULL, NULL),
(24586150, 'Diana Mayerli Barbosa Valencia', NULL, NULL, NULL, NULL),
(24586543, 'Angela Patricia Gutierrez Montoya', NULL, NULL, NULL, NULL),
(25328240, 'Lidya Lucero Leon Sarria', NULL, NULL, NULL, NULL),
(25424350, 'Maria Arlenis Montenegro', NULL, NULL, NULL, NULL),
(29112246, 'Anna Carolina Ramirez Jaramillo', NULL, NULL, NULL, NULL),
(29436454, 'Monica Andrea Pimentel Agudelo', NULL, NULL, NULL, NULL),
(29448794, 'Aceneth Gomez Monsalve', NULL, NULL, NULL, NULL),
(29500127, 'Fabiola Varela Muñoz', NULL, NULL, NULL, NULL),
(29952233, 'jenny patricia morales martinez', NULL, NULL, NULL, NULL),
(31486518, 'Diana Margarita Sierra Ceron', NULL, NULL, NULL, NULL),
(31565183, 'Ana Maria Rubiano Lopez', NULL, NULL, NULL, NULL),
(31571951, 'Sandra Patricia Gutierrez Estacio', NULL, NULL, NULL, NULL),
(31584350, 'Darli Yohanna Ramos Rodriguez', NULL, NULL, NULL, NULL),
(31640048, 'Olga Stella Abadia Cabal', NULL, NULL, NULL, NULL),
(31857860, 'Martha Cecilia Rengifo Castro', NULL, NULL, NULL, NULL),
(31877739, 'Ybani Popo Trujillo', NULL, NULL, NULL, NULL),
(31887813, 'Zhelde Alexandrovich Vaisman', NULL, NULL, NULL, NULL),
(31889816, 'Luz Mery Guzman Alegrias', NULL, NULL, NULL, NULL),
(31894476, 'Norha Cecilia Vacca Suarez', NULL, NULL, NULL, NULL),
(31945663, 'Maria Encarnación Palacios Mosquera', NULL, NULL, NULL, NULL),
(31964505, 'Miyerland Patiño', NULL, NULL, NULL, NULL),
(34319355, 'Jimena Gomez Salazar', NULL, NULL, NULL, NULL),
(36861950, 'Diana Carolina Bastidas Bastidas', 'CONTRATISTA', 0, '316 6217658', 'diana.bastidas@cali.gov.co'),
(38470236, 'Leidy Johanna Riascos Lucumi', NULL, NULL, NULL, NULL),
(38551728, 'Luz Edith Fajardo Martinez', NULL, NULL, NULL, NULL),
(38552076, 'Jacqueline Lopez Echavarria', NULL, NULL, NULL, NULL),
(38560791, 'Angie Juliana Anacona Diaz', NULL, NULL, NULL, NULL),
(38666240, 'Lina Fernanda Garcia Caracas', NULL, NULL, NULL, NULL),
(38865058, 'Maria Elena Benjumea', NULL, NULL, NULL, NULL),
(38888644, 'Sandra Catalina Valdes Jordan', NULL, NULL, NULL, NULL),
(42111713, 'Ana Milena Rojo Ospina', NULL, NULL, NULL, NULL),
(53062161, 'Viviana Andrea Arango Diaz', NULL, NULL, NULL, NULL),
(66830916, 'Luz Angela Coscue Escobar', NULL, NULL, NULL, NULL),
(66850740, 'Luz Dary Delgado Cortes', NULL, NULL, NULL, NULL),
(66870579, 'Gloria Elena Garcia Garcia', NULL, NULL, NULL, NULL),
(66901088, 'Sandra Liliana Bejarano', NULL, NULL, NULL, NULL),
(66957270, 'Martha Liliana Puentes Caceres', NULL, NULL, NULL, NULL),
(66979857, 'Eleonora Cabal Sanchez', NULL, NULL, NULL, NULL),
(66988163, 'Viviana Lucero Grajales Velasquez', NULL, NULL, NULL, NULL),
(66988420, 'Luz Carime Lenis Balcazar', NULL, NULL, NULL, NULL),
(66994134, 'Diana Yaneth Barrios Cisneros', NULL, NULL, NULL, NULL),
(67010503, 'Blanca Ximena Payan', NULL, NULL, NULL, NULL),
(67016724, 'Sandra Lorena Zea Minda', NULL, NULL, NULL, NULL),
(67021799, 'Luz Angela Narvaez Poveda', NULL, NULL, NULL, NULL),
(67026984, 'Paola Andrea Franco Jaramillo', NULL, NULL, NULL, NULL),
(67040584, 'Sandra patricia Alhay Garcia', NULL, NULL, NULL, NULL),
(80104208, 'Steven Rozen Mizrachi', NULL, NULL, NULL, NULL),
(94063366, 'Carlos Humberto Clavijo Muelas', NULL, NULL, NULL, NULL),
(94070739, 'Fernando Lobaton Salazar', NULL, NULL, NULL, NULL),
(94074652, 'Nessar Dulio Rengifo Villalba', NULL, NULL, NULL, NULL),
(94281325, 'Jorge Eduardo Vasquez', NULL, NULL, NULL, NULL),
(94370061, 'Wilmar Ortega Garcia', NULL, NULL, NULL, NULL),
(94377676, 'Jose Mauricio Florez Jimenez', NULL, NULL, NULL, NULL),
(94382562, 'Alexander Delgado Perdomo', NULL, NULL, NULL, NULL),
(94396582, 'Jaime Gonzalez', NULL, NULL, NULL, NULL),
(94398370, 'Alfredo Arango Paredes', NULL, NULL, NULL, NULL),
(94402230, 'Hayber Tovar Garcia', NULL, NULL, NULL, NULL),
(94429828, 'Leonardo Fabio Dosman Paz', NULL, NULL, NULL, NULL),
(94459053, 'Jorge Enrique Cruz Solarte', NULL, NULL, NULL, NULL),
(94495243, 'Alejandro Echeverry Gomez', NULL, NULL, NULL, NULL),
(94530308, 'Ramiro Ramirez Ochoa', NULL, NULL, NULL, NULL),
(94530501, 'Danny Humberto Cortes Alban', NULL, NULL, NULL, NULL),
(94534686, 'Carlos Andres Ceballos Santos', NULL, NULL, NULL, NULL),
(94536394, 'Edwin Jair Galvis Gomez', NULL, NULL, NULL, NULL),
(94551617, 'Nestor Raul Naranjo Banguero', NULL, NULL, NULL, NULL),
(144152766, 'Daniela Chavarro Muños', NULL, NULL, NULL, NULL),
(1005832670, 'Nazly Xiomara Vila Astaiza', NULL, NULL, NULL, NULL),
(1006010572, 'Kevin Sneider Gonzalez Acevedo', NULL, NULL, NULL, NULL),
(1006034395, 'Ingrid Tatiana Copete del Mar', NULL, NULL, NULL, NULL),
(1006166120, 'Daniela Sandoval Sandoval', NULL, NULL, NULL, NULL),
(1022416622, 'Lorena Guzman Ayala', NULL, NULL, NULL, NULL),
(1053768233, 'Diana Carolina Cano Carvajal', 'CONTRATISTA', 0, '313 7072009', 'diana.cano@cali.gov.co'),
(1059695640, 'Gebel Edilberto Taba Morales', 'CONTRATISTA', 0, '316 2897764', 'gebel.taba@cali.gov.co'),
(1059980544, 'Luis Miguel Nazarit Navarrete', NULL, NULL, NULL, NULL),
(1060356696, 'Alexander Cañaveral Mensa', NULL, NULL, NULL, NULL),
(1087118931, 'Hanser Avesner Henao Casanova', NULL, NULL, NULL, NULL),
(1098308038, 'Maria Fernanda Arbeladez Osorio', NULL, NULL, NULL, NULL),
(1107061580, 'Natali Paspur Trujillo', NULL, NULL, NULL, NULL),
(1107063911, 'Myriam Audrey Arango Pabon', NULL, NULL, NULL, NULL),
(1107071425, 'Belisa Rosa Castro Valencia', NULL, NULL, NULL, NULL),
(1107073884, 'Maria Angelica Zuleta Sierra', NULL, NULL, NULL, NULL),
(1107078375, 'Laura Celene Balanta Barreto', NULL, NULL, NULL, NULL),
(1107088309, 'Alejandro Guacialpud Betancourth', NULL, NULL, NULL, NULL),
(1107093762, 'Lizeth Daniela Forero Medina', NULL, NULL, NULL, NULL),
(1107508416, 'Juan David Mambuscay Burbano', NULL, NULL, NULL, NULL),
(1107511866, 'Kimberly Andrea Ramirez Garzon', NULL, NULL, NULL, NULL),
(1107519067, 'Deiby Alejandro Noguera Ceron', NULL, NULL, NULL, NULL),
(1109562294, 'Jonh Henry Contreras Garcia', NULL, NULL, NULL, NULL),
(1111751973, 'Jose Octavio Diaz Canga', NULL, NULL, NULL, NULL),
(1111790108, 'Lina Maria Hernandez Restrepo', NULL, NULL, NULL, NULL),
(1112488752, 'Diego Alexander Lasso Ladino', NULL, NULL, NULL, NULL),
(1113513612, 'Leydi Dayana Tabares', NULL, NULL, NULL, NULL),
(1113622252, 'Christian Andres Rangel Collazos', NULL, NULL, NULL, NULL),
(1113695870, 'Duvan Felipe Narvaez Flor', NULL, NULL, NULL, NULL),
(1113785431, 'Maria Angelica Escobar Vargas', NULL, NULL, NULL, NULL),
(1114338330, 'German Martinez Grisales', NULL, NULL, NULL, NULL),
(1114837718, 'Juan Sebastian Bermudez Rubio', 'CONTRATISTA', 0, '310 6785167', 'jsebasb30@gmail.com'),
(1116444092, 'Yessica Alejandra Giraldo Gonzalez', NULL, NULL, NULL, NULL),
(1118237179, 'Geraldine Rodriguez Valencia', NULL, NULL, NULL, NULL),
(1118285666, 'Fabio Andres Cano Herrera', NULL, NULL, NULL, NULL),
(1118296256, 'Cesar Augusto Valencia Mosquera', NULL, NULL, NULL, NULL),
(1128024727, 'Yunior Stiven Godoy Betancourt', NULL, NULL, NULL, NULL),
(1130589095, 'Fernanda Lucia Araujo Narvaez', NULL, NULL, NULL, NULL),
(1130591395, 'Jose Fernando Gomez Arbelaez', NULL, NULL, NULL, NULL),
(1130610111, 'Lina Marcela Rojas Guerra', NULL, NULL, NULL, NULL),
(1130613911, 'Hugo Dario Gomez Jaramillo', NULL, NULL, NULL, NULL),
(1130622754, 'Srahyrlandy Rocio Diaz Sanches', NULL, NULL, NULL, NULL),
(1130624097, 'Jennifer Vanesa Noreña Serna', NULL, NULL, NULL, NULL),
(1130633082, 'Jhon Edinson Sanchez Valencia', NULL, NULL, NULL, NULL),
(1130658097, 'Edinson Mina Cuero', NULL, NULL, NULL, NULL),
(1130658098, 'Yenni Yulieth Hernandez Gonzalez', NULL, NULL, NULL, NULL),
(1130658760, 'Rafael Antonio Arce Saenz', NULL, NULL, NULL, NULL),
(1130659551, 'Sandra Liliana Bermudez Mosquera', NULL, NULL, NULL, NULL),
(1130660666, 'Jhonathan Lozano Cano', NULL, NULL, NULL, NULL),
(1130666519, 'Maria Del Mar Ramirez Rebellon', NULL, NULL, NULL, NULL),
(1130682201, 'Diana Carolina Patiño Loza', NULL, NULL, NULL, NULL),
(1130683452, 'Lindalia Patricia Baron Pico', NULL, NULL, NULL, NULL),
(1143825540, 'luiz felipe Echeverry Abadia', NULL, NULL, NULL, NULL),
(1143829872, 'Sebastian Rojas Giraldo', NULL, NULL, NULL, NULL),
(1143847102, 'Katherin Johana Londoño Piedrahita', NULL, NULL, NULL, NULL),
(1143851369, 'Maria Mercedes Cardoza Sanchez', NULL, NULL, NULL, NULL),
(1143852209, 'Mario Jordan Mejia Vargas', NULL, NULL, NULL, NULL),
(1143853077, 'Luiz Andeimer Ramirez', 'CONTRATISTA', 0, '318 7280373', 'luis.ramirez.cal@cali.gov.co'),
(1143854752, 'Julian Andrea Mosquera Galindez', NULL, NULL, NULL, NULL),
(1143855110, 'Brian Zamora Garces', NULL, NULL, NULL, NULL),
(1143857085, 'Katherin Rivera Granada', NULL, NULL, NULL, NULL),
(1143859435, 'Alex David Perez', NULL, NULL, NULL, NULL),
(1143869692, 'Laura Manuela Bedoya Cardona', NULL, NULL, NULL, NULL),
(1143940926, 'Jhonier Mosquera Mosquera', NULL, NULL, NULL, NULL),
(1143949506, 'Jefferson Stiven Rivas Solano', NULL, NULL, NULL, NULL),
(1143953006, 'Jhon Freddy Florez Bedoya', NULL, NULL, NULL, NULL),
(1144024013, 'Angelica Maria Rubio Hurtado', NULL, NULL, NULL, NULL),
(1144034930, 'Luis Eduardo Melecio Fajardo', NULL, NULL, NULL, NULL),
(1144039474, 'Christian Camilo Muñoz Campiño', NULL, NULL, NULL, NULL),
(1144041879, 'Francisco de Jesus Gallego Ospina', NULL, NULL, NULL, NULL),
(1144045950, 'Jennifer Lorena Dumancely Salazar', NULL, NULL, NULL, NULL),
(1144049917, 'Johan Vasquez Collazos', 'CONTRATISTA', 0, '317 2329195', 'johan.vasquez.collazos@correounivalle.ed'),
(1144062535, 'Jhonatan Muñoz', NULL, NULL, NULL, NULL),
(1144063314, 'Andres Felipe Velasco Romero', 'CONTRATISTA', 0, '313 3913742', 'andres.velasco.rom@cali.gov.co'),
(1144063625, 'Yessica Stephanie Fortaleche Herrera', NULL, NULL, NULL, NULL),
(1144066878, 'Andrea Medina Pelaez', NULL, NULL, NULL, NULL),
(1144067053, 'Jorge Eliecer Lozano Agudelo', NULL, NULL, NULL, NULL),
(1144067703, 'Andres Felipe Olaya Perdomo', NULL, NULL, NULL, NULL),
(1144067862, 'Stefhania Libreros Serna', NULL, NULL, NULL, NULL),
(1144071184, 'Mariana Ruiz Herrera', NULL, NULL, NULL, NULL),
(1144081630, 'Ingrid Sugey Valencia Canar', NULL, NULL, NULL, NULL),
(1144084151, 'Bayron Abel Henao Benitez', NULL, NULL, NULL, NULL),
(1144086580, 'Daniela Ocampo Cabrera', NULL, NULL, NULL, NULL),
(1144090766, 'Valentina Montero Rodriguez', NULL, NULL, NULL, NULL),
(1144091873, 'David Esteban Sandoval', NULL, NULL, NULL, NULL),
(1144092263, 'Juan David Gomez Penagos', NULL, NULL, NULL, NULL),
(1144100305, 'Yojhan Steeven Vasquez Naranjo', NULL, NULL, NULL, NULL),
(1144136440, 'Angelica Gutierrez Gonzalez', NULL, NULL, NULL, NULL),
(1144151735, 'Francy leany Caicedo Mosquera', NULL, NULL, NULL, NULL),
(1144152964, 'Lina Paola Cardenas Vargas', NULL, NULL, NULL, NULL),
(1144153716, 'Juan Carlos Guerra Lara', NULL, NULL, NULL, NULL),
(1144155684, 'Katheryne Sarria marmolejo', NULL, NULL, NULL, NULL),
(1144161435, 'Jeyson Mauricio Cuevas Duran', NULL, NULL, NULL, NULL),
(1144178905, 'Bayron Fernando Puerta Quiñones', NULL, NULL, NULL, NULL),
(1144179482, 'Alexander Quiñonez Banguera', NULL, NULL, NULL, NULL),
(1144187093, 'Daniela Buitron Muñoz', NULL, NULL, NULL, NULL),
(1144187561, 'Angie Mar Morales Cerezo', NULL, NULL, NULL, NULL),
(1144187627, 'Sury Dayan Palma Ceballos', NULL, NULL, NULL, NULL),
(1144201314, 'Gonzalo Rodriguez Casanova', NULL, NULL, NULL, NULL),
(1144209952, 'Juan Sebastian Ariza Mondragon', NULL, NULL, NULL, NULL),
(1144211056, 'Ingrid Julieth Pizo fernandez', NULL, NULL, NULL, NULL),
(1151939029, 'Luis Fernando Jimenez Hincapie', NULL, NULL, NULL, NULL),
(1151943565, 'Steffani Longas Plaza', NULL, NULL, NULL, NULL),
(1151945750, 'Katheryn Johanna Calero Cubillos', NULL, NULL, NULL, NULL),
(1151957865, 'Miguel Angel Largacha Bedoya', NULL, NULL, NULL, NULL),
(1151971208, 'Valeria Vera Benitez', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `VcrIdSol` varchar(12) NOT NULL,
  `VcrSol` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`VcrIdSol`, `VcrSol`) VALUES
('8001010501', 'Informativo'),
('8001010502', 'Operativo'),
('8001010503', 'Solicitud'),
('8001010504', 'Traslado'),
('8001010505', 'Sin asignar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_combustible`
--

CREATE TABLE `tipo_combustible` (
  `VcrIdComb` int(10) UNSIGNED NOT NULL,
  `VcrComb` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_combustible`
--

INSERT INTO `tipo_combustible` (`VcrIdComb`, `VcrComb`) VALUES
(1, 'Gasolina corriente'),
(2, 'Gasolina extra'),
(3, 'Diesel'),
(4, 'Gas Natural Vehicular');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documento`
--

CREATE TABLE `tipo_documento` (
  `VcrIdTip` int(10) UNSIGNED NOT NULL,
  `VcrTip` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_documento`
--

INSERT INTO `tipo_documento` (`VcrIdTip`, `VcrTip`) VALUES
(1, 'Cédula de ciudadanía'),
(2, 'Cédula de extranjeria'),
(3, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_evento`
--

CREATE TABLE `tipo_evento` (
  `VcrIdEve` int(10) UNSIGNED NOT NULL,
  `VcrTipEve` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_evento`
--

INSERT INTO `tipo_evento` (`VcrIdEve`, `VcrTipEve`) VALUES
(1, 'Masivo (complejo)'),
(2, 'No masivo (no complejo)'),
(3, 'Deportivo'),
(4, 'Artes escenicas'),
(5, 'Concierto'),
(6, 'Empresarial'),
(7, 'Familiar'),
(8, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_material`
--

CREATE TABLE `tipo_material` (
  `VcrIdMat` int(10) UNSIGNED NOT NULL,
  `VcrTipMat` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_material`
--

INSERT INTO `tipo_material` (`VcrIdMat`, `VcrTipMat`) VALUES
(1, 'Concreto'),
(2, 'Ladrillo'),
(3, 'Liviano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_perdida`
--

CREATE TABLE `tipo_perdida` (
  `VcrIdPer` varchar(7) DEFAULT NULL,
  `VcrNomPer` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tipo_perdida`
--

INSERT INTO `tipo_perdida` (`VcrIdPer`, `VcrNomPer`) VALUES
('integer', 'varchar 40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE `ubicacion` (
  `VcrIdUbi` bigint(20) NOT NULL,
  `VcrUbi` varchar(40) DEFAULT NULL,
  `VcrDesUbi` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ubicacion`
--

INSERT INTO `ubicacion` (`VcrIdUbi`, `VcrUbi`, `VcrDesUbi`) VALUES
(8001011701, 'Suelo urbano', 'El lugar de la visita de verificación por condiciones de riesgo se encuentra ubicado dentro\ndel área del perímetro urbano del Distrito.'),
(8001011702, 'Suelo rural', 'El lugar de la visita de verificación por condiciones de riesgo se encuentra ubicado en el\nárea rural del Distrito.'),
(8001011703, 'Suelo de expansión', 'El lugar de la visita de verificación por condiciones de riesgo se encuentra ubicado en el\nárea de expansión urbana del Distrito.\n'),
(8001011704, 'Sin asignar', 'Sin asignar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `VcrIdUsu` int(11) NOT NULL,
  `VcrNomUsu` varchar(40) DEFAULT NULL,
  `VcrIdenUsu` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividad_economica`
--
ALTER TABLE `actividad_economica`
  ADD PRIMARY KEY (`VcrIdAct`);

--
-- Indices de la tabla `afectacion`
--
ALTER TABLE `afectacion`
  ADD PRIMARY KEY (`VcrIdAfe`);

--
-- Indices de la tabla `barrios`
--
ALTER TABLE `barrios`
  ADD PRIMARY KEY (`VcrIdBarVe`),
  ADD KEY `VcrIdCom` (`VcrIdCom`);

--
-- Indices de la tabla `capacidad_reducida`
--
ALTER TABLE `capacidad_reducida`
  ADD PRIMARY KEY (`VcrIdCap`);

--
-- Indices de la tabla `caracteristicas_evento`
--
ALTER TABLE `caracteristicas_evento`
  ADD PRIMARY KEY (`VcrIdCar`);

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`VcrIdCom`);

--
-- Indices de la tabla `corregimientos`
--
ALTER TABLE `corregimientos`
  ADD PRIMARY KEY (`VcrIdCorr`);

--
-- Indices de la tabla `dependencias`
--
ALTER TABLE `dependencias`
  ADD PRIMARY KEY (`VcrId`);

--
-- Indices de la tabla `edificacion`
--
ALTER TABLE `edificacion`
  ADD PRIMARY KEY (`VcrIdEdi`);

--
-- Indices de la tabla `fenomenos`
--
ALTER TABLE `fenomenos`
  ADD PRIMARY KEY (`VcrIdFen`);

--
-- Indices de la tabla `fuente_riesgo`
--
ALTER TABLE `fuente_riesgo`
  ADD PRIMARY KEY (`VcrIdFte`);

--
-- Indices de la tabla `lesiones`
--
ALTER TABLE `lesiones`
  ADD PRIMARY KEY (`VcrIdLes`);

--
-- Indices de la tabla `membership_grouppermissions`
--
ALTER TABLE `membership_grouppermissions`
  ADD PRIMARY KEY (`permissionID`),
  ADD UNIQUE KEY `groupID_tableName` (`groupID`,`tableName`);

--
-- Indices de la tabla `membership_groups`
--
ALTER TABLE `membership_groups`
  ADD PRIMARY KEY (`groupID`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `membership_userpermissions`
--
ALTER TABLE `membership_userpermissions`
  ADD PRIMARY KEY (`permissionID`),
  ADD UNIQUE KEY `memberID_tableName` (`memberID`,`tableName`);

--
-- Indices de la tabla `membership_userrecords`
--
ALTER TABLE `membership_userrecords`
  ADD PRIMARY KEY (`recID`),
  ADD UNIQUE KEY `tableName_pkValue` (`tableName`,`pkValue`(100)),
  ADD KEY `pkValue` (`pkValue`),
  ADD KEY `tableName` (`tableName`),
  ADD KEY `memberID` (`memberID`),
  ADD KEY `groupID` (`groupID`);

--
-- Indices de la tabla `membership_users`
--
ALTER TABLE `membership_users`
  ADD PRIMARY KEY (`memberID`),
  ADD KEY `groupID` (`groupID`);

--
-- Indices de la tabla `membership_usersessions`
--
ALTER TABLE `membership_usersessions`
  ADD UNIQUE KEY `memberID_token_agent` (`memberID`,`token`(50),`agent`(50)),
  ADD KEY `memberID` (`memberID`),
  ADD KEY `expiry_ts` (`expiry_ts`);

--
-- Indices de la tabla `motivo_visita`
--
ALTER TABLE `motivo_visita`
  ADD PRIMARY KEY (`VcrIdMot`);

--
-- Indices de la tabla `municipios`
--
ALTER TABLE `municipios`
  ADD PRIMARY KEY (`VcrIdExp`);

--
-- Indices de la tabla `natural`
--
ALTER TABLE `natural`
  ADD PRIMARY KEY (`VcrId`),
  ADD KEY `VcrIdSol` (`VcrIdSol`),
  ADD KEY `VcrIdTip` (`VcrIdTip`),
  ADD KEY `VcrIdMot` (`VcrIdMot`),
  ADD KEY `VcrIdUbi` (`VcrIdUbi`),
  ADD KEY `VcrIdBarVe` (`VcrIdBarVe`),
  ADD KEY `VcrIdCorr` (`VcrIdCorr`),
  ADD KEY `VcrIdCom` (`VcrIdCom`),
  ADD KEY `VcrIdFen` (`VcrIdFen`),
  ADD KEY `VcrIdCar` (`VcrIdCar`),
  ADD KEY `VcrIdEdi` (`VcrIdEdi`),
  ADD KEY `VcrIdAfe` (`VcrIdAfe`),
  ADD KEY `VcrIdMat` (`VcrIdMat`),
  ADD KEY `VcrIdLes` (`VcrIdLes`),
  ADD KEY `VcrIdCap` (`VcrIdCap`),
  ADD KEY `VcrIdTra1` (`VcrIdTra1`),
  ADD KEY `VcrdTra2` (`VcrdTra2`),
  ADD KEY `VcrIdTra3` (`VcrIdTra3`),
  ADD KEY `VcrIdTra4` (`VcrIdTra4`),
  ADD KEY `VcrIdSerP` (`VcrIdSerP`);

--
-- Indices de la tabla `procesos`
--
ALTER TABLE `procesos`
  ADD PRIMARY KEY (`VcrIdProc`);

--
-- Indices de la tabla `servidor_publico`
--
ALTER TABLE `servidor_publico`
  ADD PRIMARY KEY (`VcrIdSerP`),
  ADD KEY `VcrIdProc` (`VcrIdProc`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`VcrIdSol`);

--
-- Indices de la tabla `tipo_combustible`
--
ALTER TABLE `tipo_combustible`
  ADD PRIMARY KEY (`VcrIdComb`);

--
-- Indices de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  ADD PRIMARY KEY (`VcrIdTip`);

--
-- Indices de la tabla `tipo_evento`
--
ALTER TABLE `tipo_evento`
  ADD PRIMARY KEY (`VcrIdEve`);

--
-- Indices de la tabla `tipo_material`
--
ALTER TABLE `tipo_material`
  ADD PRIMARY KEY (`VcrIdMat`);

--
-- Indices de la tabla `ubicacion`
--
ALTER TABLE `ubicacion`
  ADD PRIMARY KEY (`VcrIdUbi`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`VcrIdUsu`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dependencias`
--
ALTER TABLE `dependencias`
  MODIFY `VcrId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `membership_grouppermissions`
--
ALTER TABLE `membership_grouppermissions`
  MODIFY `permissionID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `membership_groups`
--
ALTER TABLE `membership_groups`
  MODIFY `groupID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `membership_userpermissions`
--
ALTER TABLE `membership_userpermissions`
  MODIFY `permissionID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `membership_userrecords`
--
ALTER TABLE `membership_userrecords`
  MODIFY `recID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `natural`
--
ALTER TABLE `natural`
  MODIFY `VcrId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `procesos`
--
ALTER TABLE `procesos`
  MODIFY `VcrIdProc` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_combustible`
--
ALTER TABLE `tipo_combustible`
  MODIFY `VcrIdComb` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipo_documento`
--
ALTER TABLE `tipo_documento`
  MODIFY `VcrIdTip` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipo_evento`
--
ALTER TABLE `tipo_evento`
  MODIFY `VcrIdEve` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tipo_material`
--
ALTER TABLE `tipo_material`
  MODIFY `VcrIdMat` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
