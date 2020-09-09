#include <iostream>
#include <cstring>
#include <iomanip>

/*
 * Nel main viene settata una matrice 4x5 ponendo in ogni cella la differenza tra la colonna meno la riga che occupa e quando il valore è negativo
 * deve diventare positivo. Quindi viene chiamata una funzione t1 in cui si chiede un numero all'utente  e si cerca quante volte è presente nella matrice.
 * Se non è mai presente viene chiamata una seconda funzione t2 dove si invertono i valori delle celle sugli angoli una opposta all'altra
 * */

#define ROWS 4
#define COLS 5

void pprint(int matrix[ROWS][COLS]);
int t1(int matrix[ROWS][COLS]);
void t2(int matrix[ROWS][COLS]);

int main() {

	// Dichiaro la matrice e la inizializzo con tutti valori pari a zero
	int matrix[ROWS][COLS];
	std::memset(matrix, 0, sizeof(int[ROWS]) * COLS);
	// Popolo la matrice con i valori richiesti dalla specifica
	int candidate = 0;
	for (int r = 0; r < ROWS; r++) {
		for (int c = 0; c < COLS; c++) {
			candidate = c - r;
			matrix[r][c] = (candidate < 0) ? 0 - candidate : candidate;
		}
	}
	pprint(matrix);
	// Invoco t1
	int occurences = t1(matrix);
	std::cout << "il numero indicato appare " << occurences
			<< " volte nella matrice\n";
	// Se t1 ritorna un valore diverso da zero ristampa la matrice;
	if (!occurences){
		pprint(matrix);
	}
	return 0;

}
int t1(int matrix[ROWS][COLS]) {
	// Chiede di inserire un numero all'utente finchè egli non inserisce un input valido
	std::cout << "please type a number: ";
	int input;
	std::cin >> input;
	while (std::cin.fail() && std::cin.peek() != 'EOF') {
		std::cin.clear();
		std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
		std::cout << "input must be a number" << "\n";
		std::cin >> input;
	}
	// conto quante volte input è presente in matrix

	int count = 0;
	for (int r = 0; r < ROWS; r++) {
		for (int c = 0; c < COLS; c++) {
			if (matrix[r][c] == input) {
				count++;
			};
		}
	}
	// Se input è presente in matrix tutto ok, altrimenti chiamo t2
	if (!count) {
		t2(matrix);
	}
	// Ritorno il numero di occorrenze di input in matrix
	return count;
}

void t2(int matrix[ROWS][COLS]) {
	for (int r = 0; r < ROWS; r += ROWS - 1){
		// calcola la riga speculare alla riga corrente
		int mirrorRow = (r + (ROWS - 1)) % ((ROWS - 1) * 2);
		// effettua lo scambio
		int temp = matrix[r][0];
		matrix [r][0] = matrix[mirrorRow][COLS - 1];
		matrix[mirrorRow][COLS - 1] = temp;
	}
}

void pprint(int matrix[ROWS][COLS]) {
	// stampa il contenuto della matrice in un formato leggibile
	for (int r = 0; r < ROWS; r++) {
		std::cout << "[";
		for (int c = 0; c < COLS; c++) {
			std::cout << std::setw(3) << matrix[r][c];
		}
		std::cout << std::setw(3) << "]" << "\n";
	}
}
