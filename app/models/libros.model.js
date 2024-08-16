module.exports = (sequelize, Sequelize) => {
	const Libro = sequelize.define('libros', {	
		codigoLibro: {
			type: Sequelize.INTEGER,
			allowNull: false,
			unique: true,
			validate: {
				min: 0,
				max: 255 
			}
		},
		nombreLibro: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [1, 60]
			}
		},
		editorial: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [1, 25]
			}
		},
		autor: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [1, 25]
			}
		},
		genero: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [1, 20]
			}
		},
		paisAutor: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				len: [1, 20]
			}
		},
		numeroPaginas: {
			type: Sequelize.INTEGER,
			allowNull: false,
			validate: {
				min: 0
			}
		},
		anioEdicion: {
			type: Sequelize.DATE,
			allowNull: false
		},
		precioLibro: {
			type: Sequelize.DECIMAL(10, 2), 
			allowNull: false
		}
	});
	
	return Libro;
}
