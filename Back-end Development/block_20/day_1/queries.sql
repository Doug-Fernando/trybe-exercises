SELECT MAX(salary)
FROM hr.employees;

SELECT MIN(salary) - MAX(salary)
FROM hr.employees;

SELECT JOB_ID, AVG(salary) AS average
FROM hr.employees GROUP BY JOB_ID
ORDER BY average DESC;

SELECT SUM(salary)
FROM hr.employees;

SELECT MAX(salary), MIN(salary), SUM(salary), ROUND(AVG(salary), 2)
FROM hr.employees;

SELECT JOB_ID, COUNT(*) AS total FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(salary) AS total
FROM hr.employees
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(salary) AS total
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';


SELECT JOB_ID, SUM(salary)
FROM hr.employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID;

SELECT JOB_ID, AVG(salary) AS average
FROM hr.employees
GROUP  BY JOB_ID
HAVING NOT JOB_ID = 'IT_PROG'
ORDER BY average DESC

SELECT COUNT(*), AVG(salary)
FROM hr.employees
GROUP BY department_id
HAVING department_id > 10;

UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%'

SELECT first_name FROM hr.employees
WHERE LENGTH(first_name) > 8;

SELECT employee_id, first_name, LEFT(hire_date, 4)
FROM hr.employees;

SELECT employee_id, first_name, YEAR(hire_date)
FROM hr.employees;

SELECT employee_id, first_name, DAY(hire_date)
FROM hr.employees;

SELECT employee_id, first_name, month(hire_date)
FROM hr.employees;

SELECT UCASE(first_name), UCASE(last_name)
FROM hr.employees;

SELECT last_name, hire_date
FROM hr.employees
HAVING MONTH(hire_date) = 07
AND YEAR(hire_date) = 1987

SELECT first_name, last_name, DATEDIFF(NOW(), hire_date)
FROM hr.employees;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date)
FROM hr.employees;



