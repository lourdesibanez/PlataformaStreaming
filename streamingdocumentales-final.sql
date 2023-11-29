-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2023 a las 20:27:22
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `streamingdocumentales`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id`, `nombre_usuario`) VALUES
(1, 'Juan');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacion`
--

CREATE TABLE `calificacion` (
  `id` int(11) NOT NULL,
  `value` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `calificacion`
--

INSERT INTO `calificacion` (`id`, `value`) VALUES
(1, 4.5),
(2, 3),
(3, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificacionxdocumental`
--

CREATE TABLE `calificacionxdocumental` (
  `id_documental` int(11) NOT NULL,
  `id_calificacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `calificacionxdocumental`
--

INSERT INTO `calificacionxdocumental` (`id_documental`, `id_calificacion`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'Deportes'),
(2, 'Artisticos'),
(3, 'Historia'),
(4, 'Educativos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoriaxdocumental`
--

CREATE TABLE `categoriaxdocumental` (
  `id_categoria` int(11) NOT NULL,
  `id_documental` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoriaxdocumental`
--

INSERT INTO `categoriaxdocumental` (`id_categoria`, `id_documental`) VALUES
(2, 2),
(3, 3),
(4, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documental`
--

CREATE TABLE `documental` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `duracion` time DEFAULT NULL,
  `id_administrador` int(11) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `id_proveedor_audiovisual` int(11) NOT NULL,
  `id_mpaa` int(11) NOT NULL,
  `descripcion` varchar(999) DEFAULT NULL,
  `img` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `documental`
--

INSERT INTO `documental` (`id`, `titulo`, `anio`, `duracion`, `id_administrador`, `url`, `id_proveedor_audiovisual`, `id_mpaa`, `descripcion`, `img`) VALUES
(1, 'Malala', 2021, '01:30:00', 1, 'http://url1.com', 1, 1, 'Documental para aprender jugando', 'https://images.pexels.com/photos/839428/pexels-photo-839428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(2, 'El ultimo baile', 2019, '02:15:00', 1, 'http://url2.com', 1, 2, 'Imperdible para amantes de la danza', 'https://images.pexels.com/photos/3949681/pexels-photo-3949681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(3, '1945', 2022, '01:45:00', 1, 'http://url3.com', 1, 3, 'Una mirada a la historia', 'https://images.pexels.com/photos/16849391/pexels-photo-16849391/free-photo-of-monumento-militar-historia-guerra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(4, 'Juventus', 2023, '01:00:00', 1, 'http://url3.com', 1, 3, 'Una mirada a la historia', 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(5, 'Maravillas Naturales', 2022, '01:30:00', 1, 'url-del-video', 1, 1, 'Maravillas de la naturaleza - Argentina', 'https://images.pexels.com/photos/3158519/pexels-photo-3158519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(6, 'Vida Salvaje - El zorro gris', 1990, '01:30:00', 1, 'url-documental', 2, 3, 'Un acercamiento a la vida en la naturaleza del zorro gris.', 'https://images.pexels.com/photos/134058/pexels-photo-134058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(7, 'Space X ', 20223, '02:00:00', 1, 'url-space-x', 3, 5, 'Space Exploration Technologies Corp. conocida como SpaceX, es una empresa estadounidense de fabricación aeroespacial y de servicios de transporte espacial con sede en Hawthorne. Veamos un recorrido desde adentro.', 'https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(8, 'Remanenetes Estelares - Enanas Blancas', 2020, '01:30:00', 1, 'url-enanas-blancas', 1, 4, 'Una enana blanca es un remanente estelar que se genera cuando una estrella de masa menor que 10 masas solares ha agotado su combustible nuclear. ¿Pero cuanto tiempo toma? Descubrelo', 'https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(9, 'Superautos', 2019, '01:12:00', 1, 'url-autos', 2, 3, 'Los autos mas increibles que nunca imaginarias.', 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
(10, 'Especies Invasoras ', 2021, '50:00:00', 1, 'url-catas', 3, 1, 'Especies imvasoras introducidas por humanos y su impacto en el ecosistema.', 'https://images.pexels.com/photos/1098254/pexels-photo-1098254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentalxregion`
--

CREATE TABLE `documentalxregion` (
  `id_documental` int(11) NOT NULL,
  `id_region` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `documentalxregion`
--

INSERT INTO `documentalxregion` (`id_documental`, `id_region`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documental_has_documental`
--

CREATE TABLE `documental_has_documental` (
  `Documental_id_documental` int(11) NOT NULL,
  `Documental_id_documental1` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorito`
--

CREATE TABLE `favorito` (
  `id_usuario` int(11) NOT NULL,
  `id_documental` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `favorito`
--

INSERT INTO `favorito` (`id_usuario`, `id_documental`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medio_de_pago`
--

CREATE TABLE `medio_de_pago` (
  `id` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `medio_de_pago`
--

INSERT INTO `medio_de_pago` (`id`, `tipo`) VALUES
(1, 'Tarjeta de crédito'),
(2, 'PayPal'),
(3, 'Transferencia bancaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mpaa`
--

CREATE TABLE `mpaa` (
  `id` int(11) NOT NULL,
  `nombre_mpaa` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `mpaa`
--

INSERT INTO `mpaa` (`id`, `nombre_mpaa`) VALUES
(1, 'G'),
(2, 'PG'),
(3, 'PG-13'),
(4, 'R'),
(5, 'NC-17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor_audiovisual`
--

CREATE TABLE `proveedor_audiovisual` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `proveedor_audiovisual`
--

INSERT INTO `proveedor_audiovisual` (`id`) VALUES
(1),
(2),
(3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicidad`
--

CREATE TABLE `publicidad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `id_sponsor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `publicidad`
--

INSERT INTO `publicidad` (`id`, `nombre`, `id_sponsor`) VALUES
(1, 'Anuncio 1', 1),
(2, 'Anuncio 2', 2),
(3, 'Anuncio 3', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicidadxdocumental`
--

CREATE TABLE `publicidadxdocumental` (
  `id_documental` int(11) NOT NULL,
  `id_publicidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `publicidadxdocumental`
--

INSERT INTO `publicidadxdocumental` (`id_documental`, `id_publicidad`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `region`
--

CREATE TABLE `region` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `region`
--

INSERT INTO `region` (`id`, `nombre`) VALUES
(1, 'América'),
(2, 'Europa'),
(3, 'Asia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sponsor`
--

CREATE TABLE `sponsor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sponsor`
--

INSERT INTO `sponsor` (`id`, `nombre`) VALUES
(1, 'Coca'),
(2, 'Nike'),
(3, 'Intel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `streaming`
--

CREATE TABLE `streaming` (
  `id_documental` int(11) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `hora_inicio` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `streaming`
--

INSERT INTO `streaming` (`id_documental`, `fecha_inicio`, `hora_inicio`) VALUES
(4, '2023-11-30', '2019-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_de_usuario`
--

CREATE TABLE `tipo_de_usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tipo_de_usuario`
--

INSERT INTO `tipo_de_usuario` (`id`, `nombre`) VALUES
(1, 'Cliente'),
(2, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `id_medio_de_pago` int(11) NOT NULL,
  `id_tipo_usuario` int(11) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre_usuario`, `nombre`, `apellido`, `email`, `id_medio_de_pago`, `id_tipo_usuario`, `password`, `token`) VALUES
(1, 'john.doe', 'John', 'Doe', 'john.doe@example.com', 1, 1, '$2a$10$nvPlm4W2RF3BqZcjtllKuOHC9PNYma.mRKSZ8zHIOd4rmmOqOf76K', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE3MDA3NTg1NTh9.Pmocx01xmeTrwkbDqMxj-AaC0ejXIGboza9vdw14x_M'),
(2, 'jane.smith', 'Jane', 'Smith', 'jane.smith@example.com', 2, 1, '', NULL),
(3, 'juana_alexia', 'Juana', 'Chaves', 'juanaa123@example.com', 1, 1, '', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visto`
--

CREATE TABLE `visto` (
  `id_usuario` int(11) NOT NULL,
  `id_documental` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `visto`
--

INSERT INTO `visto` (`id_usuario`, `id_documental`) VALUES
(1, 1),
(2, 2),
(3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calificacion`
--
ALTER TABLE `calificacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `calificacionxdocumental`
--
ALTER TABLE `calificacionxdocumental`
  ADD PRIMARY KEY (`id_documental`,`id_calificacion`),
  ADD KEY `fk_Documental_has_califiicacion_califiicacion1` (`id_calificacion`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoriaxdocumental`
--
ALTER TABLE `categoriaxdocumental`
  ADD PRIMARY KEY (`id_categoria`,`id_documental`),
  ADD KEY `fk_Categoria_has_Documental_Documental1` (`id_documental`);

--
-- Indices de la tabla `documental`
--
ALTER TABLE `documental`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Documental_Administrador1` (`id_administrador`),
  ADD KEY `fk_Documental_Proveedor_Audiovisual1` (`id_proveedor_audiovisual`),
  ADD KEY `fk_Documental_Mpaa1` (`id_mpaa`);

--
-- Indices de la tabla `documentalxregion`
--
ALTER TABLE `documentalxregion`
  ADD PRIMARY KEY (`id_documental`,`id_region`),
  ADD KEY `fk_Documental_has_Region_Region1` (`id_region`);

--
-- Indices de la tabla `documental_has_documental`
--
ALTER TABLE `documental_has_documental`
  ADD PRIMARY KEY (`Documental_id_documental`,`Documental_id_documental1`),
  ADD KEY `fk_Documental_has_Documental_Documental1` (`Documental_id_documental1`);

--
-- Indices de la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD PRIMARY KEY (`id_usuario`,`id_documental`),
  ADD KEY `fk_Usuario_has_Documental_Documental1` (`id_documental`);

--
-- Indices de la tabla `medio_de_pago`
--
ALTER TABLE `medio_de_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mpaa`
--
ALTER TABLE `mpaa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedor_audiovisual`
--
ALTER TABLE `proveedor_audiovisual`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `publicidad`
--
ALTER TABLE `publicidad`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Publicidad_Sponsor1` (`id_sponsor`);

--
-- Indices de la tabla `publicidadxdocumental`
--
ALTER TABLE `publicidadxdocumental`
  ADD PRIMARY KEY (`id_documental`,`id_publicidad`),
  ADD KEY `fk_Documental_has_Publicidad_Publicidad1` (`id_publicidad`);

--
-- Indices de la tabla `region`
--
ALTER TABLE `region`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sponsor`
--
ALTER TABLE `sponsor`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `streaming`
--
ALTER TABLE `streaming`
  ADD KEY `fk_Streaming_Documental1` (`id_documental`);

--
-- Indices de la tabla `tipo_de_usuario`
--
ALTER TABLE `tipo_de_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Usuario_Medio de Pago1` (`id_medio_de_pago`),
  ADD KEY `fk_Usuario_Tipo de Usuario1` (`id_tipo_usuario`);

--
-- Indices de la tabla `visto`
--
ALTER TABLE `visto`
  ADD PRIMARY KEY (`id_usuario`,`id_documental`),
  ADD KEY `fk_Usuario_has_Documental_Documental2` (`id_documental`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificacionxdocumental`
--
ALTER TABLE `calificacionxdocumental`
  ADD CONSTRAINT `fk_Documental_has_califiicacion_Documental1` FOREIGN KEY (`id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Documental_has_califiicacion_califiicacion1` FOREIGN KEY (`id_calificacion`) REFERENCES `calificacion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `categoriaxdocumental`
--
ALTER TABLE `categoriaxdocumental`
  ADD CONSTRAINT `fk_Categoria_has_Documental_Categoria1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Categoria_has_Documental_Documental1` FOREIGN KEY (`id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `documental`
--
ALTER TABLE `documental`
  ADD CONSTRAINT `fk_Documental_Administrador1` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Documental_Mpaa1` FOREIGN KEY (`id_mpaa`) REFERENCES `mpaa` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Documental_Proveedor_Audiovisual1` FOREIGN KEY (`id_proveedor_audiovisual`) REFERENCES `proveedor_audiovisual` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `documentalxregion`
--
ALTER TABLE `documentalxregion`
  ADD CONSTRAINT `fk_Documental_has_Region_Documental1` FOREIGN KEY (`id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Documental_has_Region_Region1` FOREIGN KEY (`id_region`) REFERENCES `region` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `documental_has_documental`
--
ALTER TABLE `documental_has_documental`
  ADD CONSTRAINT `fk_Documental_has_Documental_Documental` FOREIGN KEY (`Documental_id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Documental_has_Documental_Documental1` FOREIGN KEY (`Documental_id_documental1`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `favorito`
--
ALTER TABLE `favorito`
  ADD CONSTRAINT `fk_Usuario_has_Documental_Documental1` FOREIGN KEY (`id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuario_has_Documental_Usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `publicidad`
--
ALTER TABLE `publicidad`
  ADD CONSTRAINT `fk_Publicidad_Sponsor1` FOREIGN KEY (`id_sponsor`) REFERENCES `sponsor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `publicidadxdocumental`
--
ALTER TABLE `publicidadxdocumental`
  ADD CONSTRAINT `fk_Documental_has_Publicidad_Documental1` FOREIGN KEY (`id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Documental_has_Publicidad_Publicidad1` FOREIGN KEY (`id_publicidad`) REFERENCES `publicidad` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `streaming`
--
ALTER TABLE `streaming`
  ADD CONSTRAINT `fk_Streaming_Documental1` FOREIGN KEY (`id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_Usuario_Medio de Pago1` FOREIGN KEY (`id_medio_de_pago`) REFERENCES `medio_de_pago` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuario_Tipo de Usuario1` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_de_usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `visto`
--
ALTER TABLE `visto`
  ADD CONSTRAINT `fk_Usuario_has_Documental_Documental2` FOREIGN KEY (`id_documental`) REFERENCES `documental` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Usuario_has_Documental_Usuario2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
