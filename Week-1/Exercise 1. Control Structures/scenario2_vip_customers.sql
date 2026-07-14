BEGIN
    FOR customer_record IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF customer_record.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = customer_record.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
END;
/