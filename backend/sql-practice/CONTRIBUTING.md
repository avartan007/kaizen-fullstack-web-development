# Contributing Guide

Thank you for your interest in contributing to this SQL practice repository!

## How to Contribute

### Adding New SQL Scripts

1. **Create a new SQL file** following the naming convention: `feature_name.sql`
2. **Add a header** to your script with the following format:
   ```sql
   -- ============================================================================
   -- Database: [Name]
   -- Description: [Brief description]
   -- ============================================================================
   ```

3. **Use standard names** in your test data:
   - Aadi
   - Lavy
   - Vishnu
   - Dk

4. **Add comments** explaining complex queries:
   ```sql
   -- Query purpose: Brief explanation
   SELECT ...
   ```

5. **Update README.md** with information about your new script

### Code Style Guidelines

- Use **uppercase** for SQL keywords: `CREATE`, `SELECT`, `INSERT`
- Use **UPPER_CASE** for table and column names in queries when referencing
- Use **snake_case** for table and column definitions
- Indent nested statements consistently (2-4 spaces)
- Add meaningful comments for complex logic
- Keep lines under 100 characters where possible

### Testing Your Script

Before submitting:
1. Test the script in a MySQL/MariaDB environment
2. Ensure all tables are created successfully
3. Verify INSERT statements work correctly
4. Test SELECT queries return expected results
5. Check that DROP statements work without errors

### Commit Message Format

```
[type]: Brief description

Longer explanation if needed

- Addition or change 1
- Addition or change 2
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`

### Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Create a Pull Request with:
   - Clear description of changes
   - Reference to any related issues
   - Testing details

## Reporting Issues

When reporting issues:
- Provide the script name
- Include the error message or unexpected behavior
- Specify your MySQL/MariaDB version
- Provide steps to reproduce

## Code of Conduct

- Be respectful and inclusive
- Welcome different perspectives
- Focus on constructive feedback
- Help others learn and improve

## Questions?

Feel free to open an issue with the `question` label.

---

Happy Contributing! 🚀
